import {Request, Response} from 'express'
import ModuloInspecao from '../../models/moduloInspecao.entity'

export default class ModuloInspecaoController
{

    static async createModuloInspecao(req: Request, res: Response) { //Cria um novo modulo inspeção
        const{codModuloInspecao, status, descricao, imagem} = req.body

        //verificando se campos estão em null
        if(!codModuloInspecao)
        {
            return res.status(400).json({error:'O código é obrigatório!'})
        }
        if(!status)
        {
            return res.status(400).json({error: 'O status é obrigatório'})
        }
        if(!descricao)
        {
            return res.status(400).json({error: 'A descrição é obrigatória!'})
        }
        if(!imagem){
            return res.status(400).json({error: 'A imagem é obrigatória!'})
        }

        const moduloInspecao = new ModuloInspecao()
        moduloInspecao.codModuloInspecao = codModuloInspecao//atribuindo os valores obtidos no corpo da requisição
        moduloInspecao.status = status
        moduloInspecao.descricao = descricao
        moduloInspecao.imagem = imagem

        return res.status(201).json(moduloInspecao)
    }

    static async getModuloInspecao(req: Request, res: Response){
        const moduloInspecao = await ModuloInspecao.find()
        res.json(moduloInspecao)
    }

    static async getModuloInspecaoById(req: Request, res: Response)
    {
        const id = req.params

        if(!id)
        {
            return res.status(400).json({error: 'O id é obrigatório'})
        }

        const moduloInspecao = await ModuloInspecao.find({where: {codModuloInspecao: Number(id)}})
        
        return res.status(201).json(moduloInspecao)

    }

    static async destroyModuloInspecao(req: Request, res: Response)
    {
        const id = req.params
        if(!id)
        {
            return res.status(400).json({error: 'O id é obrigatório'})
        }

        
        if(!id || isNaN(Number(id))){
            return res.status(400).json({error:'O id é obrigatório'})
        }

        const moduloInspecao = await ModuloInspecao.findOneBy({codModuloInspecao: Number(id)}); 

        //Verificando se a const moduloInspecao criada acima já recebeu um retorno
        if(!moduloInspecao)
        {
            return res.status(404).json({error:'Modulo não encontrado'})

        }

        await moduloInspecao.remove() 
        return res.status(201).json(moduloInspecao)

    }

    static async updateModuloInspecao(req: Request, res: Response)
    {
        const id = req.params
        const {status, descricao, imagem} = req.body

        if(!id)
        {
            return res.status(400).json({error: 'O id é obrigatório'})
        }
        if(!status)
        {
            return res.status(400).json({error: 'O status é obrigatório'})
        }
        if(!descricao)
        {
            return res.status(400).json({error: 'A descrição é obrigatório'})
        }
        if(!imagem)
        {
            return res.status(400).json({error: 'A imagem é obrigatório'})
        }

        const moduloInspecao = await ModuloInspecao.findOneBy({codModuloInspecao: Number(id)}); 
        if(!moduloInspecao)
        {
            return res.status(404).json({error:'Máquina não encontrada'})

        }
        
        moduloInspecao.status = status
        moduloInspecao.descricao = descricao
        moduloInspecao.imagem = imagem

        await moduloInspecao.save()

        return res.json(moduloInspecao)
    }

}
