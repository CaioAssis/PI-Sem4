import {Request, Response } from 'express'
import clienteRoutes from '../../routes/cliente/cliente.routes'
import Cliente from '../../models/cliente.entity'

export default class ClienteController {
    static async store (req: Request, res:Response){
        const{nome, cpf, contato} =req.body

        if(!nome){
            return res.status(400).json({error:'O nome é obrigatório'})
        } if(!cpf){
            return res.status(400).json({error:'O cpf é obrigatório'})
        }if(!contato){
            return res.status(400).json({error:'O contato é obrigatório'})
        }

        const cliente = new Cliente()
        cliente.nome = nome
        cliente.cpf = cpf
        cliente.contato = contato

        await cliente.save()

        return res.status(201).json(cliente)
    }

    static async index (req:Request, res:Response){
        const cliente = await Cliente.find()
        return res.json(cliente)
    }

    static async show (req:Request, res:Response){
        const {id} = req.params

        if(!id || isNaN(Number(id))){
            return res.status(400).json({error:'O id é obrigatório'})
        }
         const cliente = await Cliente.findOneBy({id:Number(id)})
         return res.json(cliente)
    }

    static async delete(req:Request, res:Response){
        const{id} = req.params

        if(!id || isNaN(Number(id))){
            return res.status(400).json({error:'O id é obrigatório'})
        }

        const cliente = await Cliente.findOneBy({id:Number(id)})
        if(!cliente){
            return res.status(404).json({error:'Cliente não encontrado'})
        }

        await cliente.remove()
        return res.status(204).json()
    }

    static async update(req:Request, res:Response){
        const{id} = req.params
        const{nome, cpf, contato} =req.body

        if(!id || isNaN(Number(id))){
            return res.status(400).json({error:'O id é obrigatório'})
        }

        const cliente = await Cliente.findOneBy({id:Number(id)})
        if(!cliente){
            return res.status(404).json({error:'Cliente não encontrado'})
        }

        cliente.nome = nome || cliente.nome
        cliente.cpf = cpf || cliente.cpf
        cliente.contato = contato || cliente.contato
        await cliente.save()

        return res.json(cliente)
    }
}