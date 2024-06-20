import Cliente from "../models/cliente.entity"
import Maquina from "../models/maquina.entity"
import ModuloDescricao from "../models/moduloDescricao.entity"

export const createInitialMachines = async () => {

    const seeds = [
        { descricao: 'TR-111', vistorias: [], cliente: 1, modulos: [1, 2, 3, 4] },
        { descricao: 'TR-112', vistorias: [], cliente: 1, modulos: [1, 2, 3, 4] },
        { descricao: 'TR-113', vistorias: [], cliente: 1, modulos: [1, 2, 3, 4] },
        { descricao: 'TE-111', vistorias: [], cliente: 1, modulos: [1, 2, 3, 5] },
        { descricao: 'TE-112', vistorias: [], cliente: 1, modulos: [1, 2, 3, 5] }
    ]

    for (const seed of seeds) {

        for (const seed of seeds) {
            const existingMaq = await Maquina.findOne({ where: { descricao: seed.descricao } })
            if (!existingMaq) {
                const maquina = new Maquina()

                maquina.descricao = seed.descricao
                var mod: ModuloDescricao[] = []
                const cli = await Cliente.findOneBy({ id: Number(seed.cliente) })
                if (!cli) return console.log('Erro na criação da máquina')
                const promessas = seed.modulos.map(async (num) => {
                    const searchMod = await ModuloDescricao.find({ where: { id: Number(num) } })
                    return searchMod
                })
                const resultados = await Promise.all(promessas)
                resultados.forEach((resultado) => {
                    resultado.forEach((item) => mod.push(item))
                })

                maquina.cliente = cli
                maquina.modulosDescricao = mod
                await maquina.save()

            }
        }
    }
}