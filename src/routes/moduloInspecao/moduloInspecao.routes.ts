import { Router } from 'express'
import ModuloInspecaoController from '../../controllers/moduloInspecao/moduloInspecao.controller'

/**
 * Essas rotas são ativadas atráves da importação das mesma no arquivo index.ts
 * Para acionar as rotas corretamente é necessário especificar na requisão se é post,get,delete ou put
 * A estrutura do body deve ser a seguinte
 * {
 *  "status": "bom",
 *  "descricao": "exemplo",
 *  "imagem": "enderecodaimagemenome.jpg"
 * }
 */
const moduloInspecaoRoutes = Router()

moduloInspecaoRoutes.post('/save', ModuloInspecaoController.createModuloInspecao)
moduloInspecaoRoutes.get('/get', ModuloInspecaoController.getModuloInspecao)
moduloInspecaoRoutes.get('/get/:id', ModuloInspecaoController.getModuloInspecaoById)
moduloInspecaoRoutes.delete('/delete/:id', ModuloInspecaoController.destroyModuloInspecao)
moduloInspecaoRoutes.put('/update/:id', ModuloInspecaoController.updateModuloInspecao)

export default moduloInspecaoRoutes