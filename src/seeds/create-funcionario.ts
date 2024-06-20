import Funcionario from "../models/funcionario.entity"
import bcrypt from 'bcrypt'

export const createInitialUsers = async () => {

  const seeds = [
    { nome: 'Administrador', matricula: '0', contato:'AdmContato', usuario:'admin', senha:'admin', role:'ger' }
  ]

  for (const seed of seeds) {
    const existingUser = await Funcionario.findOne({ where: { nome: seed.nome } })
    if (!existingUser) {
        const func = new Funcionario()
        func.nome = seed.nome
        func.matricula = seed.matricula
        func.contato = seed.contato
        func.usuario = seed.usuario
        func.senha = bcrypt.hashSync(seed.senha,10) //senha + nº de vezes que vai encriptar
        func.role = seed.role
        await func.save()
    }
  }
}