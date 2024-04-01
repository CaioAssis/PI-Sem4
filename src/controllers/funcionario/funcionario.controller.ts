import { Request, Response } from 'express'
import bcrypt from 'bcrypt'
import Funcionario from '../../models/funcionario.entity'
import Token from '../../models/token.entity'

export default class AuthController {
    static async store (req: Request, res: Response){
        const {nome, cnpj, contato, usuario, senha} = req.body

        if(!nome) return res.status(400).json({error: "Nome obrigatório"})
        if(!cnpj) return res.status(400).json({error: "CNPJ obrigatório"})
        if(!contato) return res.status(400).json({error: "Contato obrigatório"})
        if(!usuario) return res.status(400).json({error: "Usuario obrigatório"})
        if(!senha) return res.status(400).json({error: "Senha obrigatória"})

        const func = new Funcionario()
        func.nome = nome
        func.cnpj = cnpj
        func.contato = contato
        func.usuario = usuario
        func.senha = bcrypt.hashSync(senha,10) //senha + nº de vezes que vai encriptar
        await func.save()

        return res.json({
            id: func.id,
            nome: func.nome,
            cnpj: func.cnpj,
            contato: func.contato,
            usuario: func.usuario
        })
    }
    
    static async login (req: Request, res: Response){
        const {usuario, senha} = req.body

        if(!usuario || !senha) return res.status(400).json({erro: "Usuário e senha são obrigatórios"})

        const func = await Funcionario.findOneBy({ usuario })
        if(!func) return res.status(401).json({ erro: "Usuário não encontrado"})

        const passwCheck = bcrypt.compareSync(senha, func.senha)
        if (!passwCheck) return res.status(401).json({ error: 'Senha inválida' })

        await Token.delete({ func: {id: func.id}})

        const token = new Token()
        const stringRand = Math.random().toString(36) //base de 36. se (2), é binario por exemplo
        token.token = bcrypt.hashSync(stringRand,1).slice(-20)
        token.expiresAt = new Date(Date.now() + 60 * 60 * 1000)
        token.refreshToken = func.id*2 + new Date().toString()
        token.func = func
        await token.save()

        return res.json({
            token: token.token,
            expiresAt: token.expiresAt,
            refreshToken: token.refreshToken
        })
    }

    static async index(req: Request, res: Response){
        const { userId } = req.headers

        if (!userId) return res.status(401).json({ error: 'Usuário não autenticado' })

        const func = await Funcionario.find()
        return res.status(200).json(func)
    }

    static async show(req: Request, res: Response){
        const { id } = req.params // const id = req.params.id
        const { userId } = req.headers

        if(!id || isNaN(Number(id))){
            return res.status(400).json({ erro: 'O id é obrigatório'})
        }

        if (!userId) return res.status(401).json({ error: 'Usuário não autenticado' })

        const func = await Funcionario.findOneBy({id: Number(id)})

        if(!func) {
            return res.status(404).json({erro: 'Não encontrado'})
        }

        return res.json(func)

    }

    static async delete(req: Request, res: Response){
        const { id } = req.params // const id = req.params.id
        const { userId } = req.headers

        if(!id || isNaN(Number(id))){
            return res.status(400).json({ erro: 'O id é obrigatório'})
        }

        if (!userId) return res.status(401).json({ error: 'Usuário não autenticado' })

        const func = await Funcionario.findOneBy({id: Number(id)})

        if(!func) {
            return res.status(404).json({erro: 'Não encontrado'})
        }

        await func.remove()
        return res.status(204).send()
    }

    static async update(req: Request, res: Response){

        const { id } = req.params
        const { nome, cnpj, contato, usuario, senha } = req.body
        const { userId } = req.headers

        if (!userId) return res.status(401).json({ error: 'Usuário não autenticado' })

        if(!nome)return res.status(400).json({ error: 'O Nome é obrigatório' })
        if(!cnpj) return res.status(400).json({error: "CNPJ obrigatório"})
        if(!contato) return res.status(400).json({error: "Contato obrigatório"})
        if(!usuario) return res.status(400).json({error: "Usuario obrigatório"})
        if(!senha) return res.status(400).json({error: "Senha obrigatória"})
        //
        if(!id || isNaN(Number(id))){
            return res.status(400).json({ erro: 'O id é obrigatório'})
        }

        const func = await Funcionario.findOneBy({id: Number(id)})

        if(!func) {
            return res.status(404).json({erro: 'Não encontrado'})
        }

        //func.title = title || func.title // caso title for nulo na requisição (PUT), mantem o titulo original
        func.nome = nome
        func.cnpj = cnpj
        func.contato = contato
        func.usuario = usuario
        func.senha = bcrypt.hashSync(senha,10) //senha + nº de vezes que vai encriptar
        await func.save()

        return res.json(func)
    }
}