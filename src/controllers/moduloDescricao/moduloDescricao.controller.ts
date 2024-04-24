import {Request, Response} from 'express'
import ModuloDescricao from '../../models/moduloDescricao.entity'

export default class ModuloDescricaoController
{

    static async createModuloDescricao(req: Request, res: Response) { //Cria um novo modulo descrição
        const{codModuloDescricao, titulo, descricao, imagem} = req.body

        //verificando se campos estão em null
        if(!codModuloDescricao)
        {
            return res.status(400).json({error:'O código é obrigatório!'})
        }
        if(!titulo)
        {
            return res.status(400).json({error: 'O titulo é obrigatório'})
        }
        if(!descricao)
        {
            return res.status(400).json({error: 'A descrição é obrigatória!'})
        }
        if(!imagem){
            return res.status(400).json({error: 'A imagem é obrigatória!'})
        }

        const moduloDescricao = new ModuloDescricao()
        moduloDescricao.codModuloDescricao = codModuloDescricao//atribuindo os valores obtidos no corpo da requisição
        moduloDescricao.titulo = titulo
        moduloDescricao.descricao = descricao
        moduloDescricao.imagem = imagem

        return res.status(201).json(moduloDescricao)
    }

    static async getModuloDescricao(req: Request, res: Response){
        const moduloDescricao = await ModuloDescricao.find()
        res.json(moduloDescricao)
    }

    static async getModuloDescricaoById(req: Request, res: Response)
    {
        const id = req.params

        if(!id)
        {
            return res.status(400).json({error: 'O id é obrigatório'})
        }

        const moduloDescricao = await ModuloDescricao.find({where: {codModuloDescricao: Number(id)}})
        
        return res.status(201).json(moduloDescricao)

    }

    static async destroyModuloDescricao(req: Request, res: Response)
    {
        const id = req.params
        if(!id)
        {
            return res.status(400).json({error: 'O id é obrigatório'})
        }

        
        if(!id || isNaN(Number(id))){
            return res.status(400).json({error:'O id é obrigatório'})
        }

        const moduloDescricao = await ModuloDescricao.findOneBy({codModuloDescricao: Number(id)}); 

        //Verificando se a const moduloDescricao criada acima já recebeu um retorno
        if(!moduloDescricao)
        {
            return res.status(404).json({error:'Modulo não encontrado'})

        }

        await moduloDescricao.remove() 
        return res.status(201).json(moduloDescricao)

    }

    static async updateModuloDescricao(req: Request, res: Response)
    {
        const id = req.params
        const {titulo, descricao, imagem} = req.body

        if(!id)
        {
            return res.status(400).json({error: 'O id é obrigatório'})
        }
        if(!titulo)
        {
            return res.status(400).json({error: 'O título é obrigatório'})
        }
        if(!descricao)
        {
            return res.status(400).json({error: 'A descrição é obrigatório'})
        }
        if(!imagem)
        {
            return res.status(400).json({error: 'A imagem é obrigatório'})
        }

        const moduloDescricao = await ModuloDescricao.findOneBy({codModuloDescricao: Number(id)}); 
        if(!moduloDescricao)
        {
            return res.status(404).json({error:'Máquina não encontrada'})

        }
        
        moduloDescricao.titulo = titulo
        moduloDescricao.descricao = descricao
        moduloDescricao.imagem = imagem

        await moduloDescricao.save()

        return res.json(moduloDescricao)
    }

}
