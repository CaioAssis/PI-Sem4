import Cliente from '../models/cliente.entity'

export const createInitialClients = async () => {

  const seeds = [
    { nome: 'Exemplo Cliente', contato:'cliente@email.com', cpf:'123.456.789-10'},
    { nome: 'Teste Cliente', contato:'testeCliente@email.com', cpf:'111.222.333-44'}
  ]

  for (const seed of seeds) {
    const existingUser = await Cliente.findOne({ where: { nome: seed.nome } })
    if (!existingUser) {
        const cli = new Cliente()
        cli.nome = seed.nome
        cli.contato = seed.contato
        cli.cpf = seed.cpf
        await cli.save()
    }
  }
}