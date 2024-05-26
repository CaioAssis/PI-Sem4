import {Request, Response} from 'express'
import maqRoutes from '../../routes/maquina/maquina.routes'
import Maquina from '../../models/maquina.entity'

export default class MaquinaController
{

    //Inserindo um novo registro
    static async createMaquina(req: Request, res: Response) {
        const{descricao} = req.body

        
        if(!descricao)
        {
            return res.status(400).json({error: 'O modelo é obrigatório!'})
        }

        const maquina = new Maquina()
        maquina.descricao = descricao

        await maquina.save()

        return res.status(201).json(maquina)
    }

    //função que lista todas as máquinas
    static async getMaquina(req: Request, res: Response) {
        const{codMaquina, descricao} = req.body

        const maquina = await Maquina.find()

        return res.status(201).json(maquina)
    }

    static async getMaquinaById(req: Request, res: Response)
    {
        const { id } = req.params

        if(!id)
        {
            return res.status(400).json({error: 'O id é obrigatório'})
        }

        const maquina = await Maquina.find({where: {id: Number(id)}})

        return res.status(201).json(maquina)

    }

    static async destroyMaquina(req: Request, res: Response)
    {
        const { id } = req.params
        if(!id)
        {
            return res.status(400).json({error: 'O id é obrigatório'})
        }

        
        if(!id || isNaN(Number(id))){
            return res.status(400).json({error:'O id é obrigatório'})
        }

        const maquina = await Maquina.findOneBy({id: Number(id)}); 

        if(!maquina)
        {
            return res.status(404).json({error:'Máquina não encontrada'})

        }

        await maquina.remove() 
        return res.status(201).json(maquina)

    }

    static async updateMaquina(req: Request, res: Response)
    {
        const { id }  = req.params
        const descricao = req.body

        if(!id)
        {
            return res.status(400).json({error: 'O id é obrigatório'})
        }
        if(!descricao)
        {
            return res.status(400).json({error: 'O modelo é obrigatório'})
        }

        const maquina = await Maquina.findOneBy({id: Number(id)}); 
        if(!maquina)
        {
            return res.status(404).json({error:'Máquina não encontrada'})

        }
        
        maquina.descricao = descricao

        await maquina.save()

        return res.json(maquina)
    }

}
