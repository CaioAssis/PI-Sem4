import { Router } from 'express'
import ModuloDescricaoController from '../../controllers/moduloDescricao/moduloDescricao.controller'

const moduloDescricaoRoutes = Router()

moduloDescricaoRoutes.post('/novadescricao', ModuloDescricaoController.createModuloDescricao)
moduloDescricaoRoutes.get('/listadescricao', ModuloDescricaoController.getModuloDescricao)
moduloDescricaoRoutes.delete('/:id', ModuloDescricaoController.destroyModuloDescricao)
moduloDescricaoRoutes.put('/:id', ModuloDescricaoController.updateModuloDescricao)

export default moduloDescricaoRoutes