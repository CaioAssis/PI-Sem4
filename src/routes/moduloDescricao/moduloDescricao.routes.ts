import { Router } from 'express'
import ModuloDescricaoController from '../../controllers/moduloDescricao/moduloDescricao.controller'

const mooduloDesccricaoRoutes = Router()

mooduloDesccricaoRoutes.post('/novadescricao', ModuloDescricaoController.createModuloDescricao)
mooduloDesccricaoRoutes.get('/listadescricao', ModuloDescricaoController.getModuloDescricao)
mooduloDesccricaoRoutes.delete('/:id', ModuloDescricaoController.destroyModuloDescricao)
mooduloDesccricaoRoutes.put('/:id', ModuloDescricaoController.updateModuloDescricao)

export default mooduloDesccricaoRoutes