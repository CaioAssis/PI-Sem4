import { Router } from 'express'
import ModuloDescricaoController from '../../controllers/moduloDescricao/moduloDescricao.controller'

const moduloDescricaoRoutes = Router()

moduloDescricaoRoutes.post('/save', ModuloDescricaoController.createModuloDescricao)//cria
moduloDescricaoRoutes.get('/get', ModuloDescricaoController.getModuloDescricao)//lista
moduloDescricaoRoutes.get('/get/:id', ModuloDescricaoController.getModuloDescricaoById)//lista por id
moduloDescricaoRoutes.delete('/delete/:id', ModuloDescricaoController.destroyModuloDescricao)//deleta, destroi, extermina
moduloDescricaoRoutes.put('/update/:id', ModuloDescricaoController.updateModuloDescricao)//atualiza

export default moduloDescricaoRoutes