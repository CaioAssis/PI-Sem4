import { Request, Response } from 'express'
import bcrypt from 'bcrypt'
import Funcionario from '../../models/funcionario.entity'
import Token from '../../models/token.entity'

export default class FuncController {
    static async store (req: Request, res: Response){
        const {nome, matricula, contato, usuario, senha, role} = req.body

        if(!nome) return res.status(400).json({error: "Nome obrigatório"})
        if(!matricula) return res.status(400).json({error: "Matrícula obrigatório"})
        if(!contato) return res.status(400).json({error: "Contato obrigatório"})
        if(!usuario) return res.status(400).json({error: "Usuario obrigatório"})
        if(!senha) return res.status(400).json({error: "Senha obrigatória"})
        if(!role) return res.status(400).json({error: "Categoria de permissão obrigatória"})

        const func = new Funcionario()
        func.nome = nome
        func.matricula = matricula
        func.contato = contato
        func.usuario = usuario
        func.senha = bcrypt.hashSync(senha,10) //senha + nº de vezes que vai encriptar
        func.role = role
        await func.save()

        return res.json({
            id: func.id,
            nome: func.nome,
            matricula: func.matricula,
            contato: func.contato,
            usuario: func.usuario,
            role: func.role
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
       /* const { id } = req.params

        if (!id) return res.status(401).json({ error: 'Usuário não autenticado' })*/

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
        const { nome, matricula, contato, usuario, senha, role } = req.body

        if(!nome)return res.status(400).json({ error: 'O Nome é obrigatório' })
        if(!matricula) return res.status(400).json({error: "Matrícula obrigatório"})
        if(!contato) return res.status(400).json({error: "Contato obrigatório"})
        if(!usuario) return res.status(400).json({error: "Usuario obrigatório"})
        if(!senha) return res.status(400).json({error: "Senha obrigatória"})
        if(!role) return res.status(400).json({error: "Permissão obrigatória"})
        //
        if(!id || isNaN(Number(id))){
            return res.status(400).json({ erro: 'O id é obrigatório'})
        }

        const func = await Funcionario.findOneBy({id: Number(id)})

        if(!func) {
            return res.status(404).json({erro: 'Não encontrado'})
        }

        func.nome = nome
        func.matricula = matricula
        func.contato = contato
        func.usuario = usuario
        if(senha!= func.senha) func.senha = bcrypt.hashSync(senha,10) //senha + nº de vezes que vai encriptar
        func.role = role
        await func.save()

        return res.json(func)
    }

    static async updateRole(req: Request, res: Response){
        const { id } = req.params
        const { nome, matricula, contato, usuario, senha, role } = req.body


        if(!nome)return res.status(400).json({ error: 'O Nome é obrigatório' })
        if(!matricula) return res.status(400).json({error: "Matrícula obrigatória"})
        if(!contato) return res.status(400).json({error: "Contato obrigatório"})
        if(!usuario) return res.status(400).json({error: "Usuario obrigatório"})
        if(!senha) return res.status(400).json({error: "Senha obrigatória"})
        if(!role) return res.status(400).json({error: "Nível de permissão obrigatório"})

        if(!id || isNaN(Number(id))){
            return res.status(400).json({ erro: 'O id é obrigatório'})
        }

        const func = await Funcionario.findOneBy({id: Number(id)})

        if(!func) {
            return res.status(404).json({erro: 'Não encontrado'})
        }

        func.nome = nome
        func.matricula = matricula
        func.contato = contato
        func.usuario = usuario
        func.senha = bcrypt.hashSync(senha,10)
        func.role = role
        await func.save()

        return res.json(func)
    }
}