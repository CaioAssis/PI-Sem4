import { Router } from 'express'
import ModuloDescricaoController from '../../controllers/moduloDescricao/moduloDescricao.controller'

const moduloDescricaoRoutes = Router()

moduloDescricaoRoutes.post('/', ModuloDescricaoController.createModuloDescricao)//cria
moduloDescricaoRoutes.get('/', ModuloDescricaoController.getModuloDescricao)//lista
moduloDescricaoRoutes.get('/:id', ModuloDescricaoController.getModuloDescricaoById)//lista por id
moduloDescricaoRoutes.delete('/:id', ModuloDescricaoController.destroyModuloDescricao)//deleta, destroi, extermina
moduloDescricaoRoutes.put('/:id', ModuloDescricaoController.updateModuloDescricao)//atualiza

export default moduloDescricaoRoutes