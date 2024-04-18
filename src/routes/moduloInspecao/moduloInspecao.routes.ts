import { Router } from 'express'
import ModuloInspecaoController from '../../controllers/moduloInspecao/moduloInspecao.controller'

const moduloInspecaoRoutes = Router()

moduloInspecaoRoutes.post('/novadescricao', ModuloInspecaoController.createModuloInspecao)
moduloInspecaoRoutes.get('/listadescricao', ModuloInspecaoController.getModuloInspecao)
moduloInspecaoRoutes.delete('/:id', ModuloInspecaoController.destroyModuloInspecao)
moduloInspecaoRoutes.put('/:id', ModuloInspecaoController.updateModuloInspecao)

export default moduloInspecaoRoutes