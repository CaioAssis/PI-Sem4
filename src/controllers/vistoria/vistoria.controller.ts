import { Request, Response } from 'express'
import Vistoria from '../../models/vistoria.entity'
import { Any, getRepository } from 'typeorm'

export default class VistoriaController {

    //Inserindo um novo registro
    static async createVistoria(req: Request, res: Response) {
        const { data, anexo, status, maquina } = req.body

        //verificando se campos estão em null
        if (!data) {
            return res.status(400).json({ error: 'Data é obrigatório!' })
        }
        if (!anexo) {
            return res.status(400).json({ error: 'Anexo é obrigatório!' })
        }
        if (!status) {
            return res.status(400).json({ error: 'Status é obrigatório!' })
        }
        if (!maquina) {
            return res.status(400).json({ error: 'Máquina é obrigatória!' })
        }
        const vistoria = new Vistoria()
        vistoria.data = data //atribuindo os valores obtidos no corpo da requisição
        vistoria.anexo = anexo
        vistoria.status = status
        vistoria.maquina = maquina
        await vistoria.save()

        return res.status(201).json(vistoria), 0
    }

    //função que lista todas as máquinas
    static async getVistoria(req: Request, res: Response) {

        const vistoria = await Vistoria.find()

        return res.status(201).json(vistoria)
    }

    static async getVistoriaById(req: Request, res: Response) {
        const { id } = req.params

        if (!id) {
            return res.status(400).json({ error: 'O id é obrigatório' })
        }

        const vistoria = await Vistoria.find({ where: { id: Number(id) } })
        //também podia ter usado o findone

        return res.status(201).json(vistoria)

    }

    static async getVistoriaByMaq(req: Request, res: Response) {
        const { id } = req.params

        if (!id) {
            return res.status(400).json({ error: `O id da maquina é obrigatório ${id}` })
        }

        
        /*const vistoria = await Vistoria.find({relations: {
           maquina: true,
        }})   */

        const vistorias = await Vistoria.find({ where: {maquinaCodMaquina: Number(id)/*é obrigatório ser um número porque no banco é um number*/}});
        
        return res.status(201).json(vistorias)

    }

    static async destroyVistoria(req: Request, res: Response) {
        const { id } = req.params
        if (!id) {
            return res.status(400).json({ error: 'O id é obrigatório' })
        }


        if (!id || isNaN(Number(id))) {
            return res.status(400).json({ error: 'O id é obrigatório' })
        }

        const vistoria = await Vistoria.findOneBy({ id: Number(id) });

        if (!vistoria) {
            return res.status(404).json({ error: 'Vistoria não encontrada' })

        }

        await vistoria.remove()
        return res.status(201).json(vistoria)

    }

    static async updateVistoria(req: Request, res: Response) {
        const { id } = req.params
        const { data, anexo, status } = req.body

        if (!id) {
            1
            return res.status(400).json({ error: 'O id é obrigatório' })
        }
        if (!data) {
            return res.status(400).json({ error: 'Data é obrigatório' })
        }
        if (!anexo) {
            return res.status(400).json({ error: 'Anexo é obrigatório' })
        }
        if (!status) {
            return res.status(400).json({ error: 'Status é obrigatório' })
        }

        const vistoria = await Vistoria.findOneBy({ id: Number(id) });
        if (!vistoria) {
            return res.status(404).json({ error: 'Máquina não encontrada' })

        }

        vistoria.data = data
        vistoria.anexo = anexo
        vistoria.status = status
        await vistoria.save()

        return res.json(vistoria)
    }

}
