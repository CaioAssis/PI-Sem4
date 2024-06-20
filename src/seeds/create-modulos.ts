import ModuloDescricao from "../models/moduloDescricao.entity"
import EsteiraExample from "./image-examples/esteira"
import LatariaExample from "./image-examples/lataria"
import RodaExample from "./image-examples/roda"
import VidroExample from "./image-examples/vidro"

export const createInitialModules = async () => {

  const seeds = [
    { titulo: 'Contextualização', descricao: 'Descrever o momento de vistoria. Ex.: "Vistoria de embarque de máquina"', imagem:''},
    { titulo: 'Verificar Lataria', descricao: 'Procurar anomalias na lataria da máquina. Ex.: Riscos, amassados, etc.', imagem: LatariaExample},
    { titulo: 'Verificar Vidros', descricao: 'Procurar anomalias nos vidros da máquina. Ex.: Riscos, trincados, etc.', imagem: VidroExample},
    { titulo: 'Verificar Rodas', descricao: 'Procurar anomalias nas rodas da máquina.', imagem: RodaExample},
    { titulo: 'Verificar Esteiras', descricao: 'Procurar anomalias nas esteiras da máquina.', imagem: EsteiraExample}
  ]

  for (const seed of seeds) {
    const existingUser = await ModuloDescricao.findOne({ where: { titulo: seed.titulo } })
    if (!existingUser) {
        const mod = new ModuloDescricao()
        mod.titulo = seed.titulo
        mod.descricao = seed.descricao
        mod.imagem = seed.imagem
        await mod.save()
    }
  }
}