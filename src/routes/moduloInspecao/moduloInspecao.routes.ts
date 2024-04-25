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
const mooduloDesccricaoRoutes = Router()

mooduloDesccricaoRoutes.post('/save', ModuloInspecaoController.createModuloInspecao)
mooduloDesccricaoRoutes.get('/get', ModuloInspecaoController.getModuloInspecao)
mooduloDesccricaoRoutes.get('/get/:id', ModuloInspecaoController.getModuloInspecaoById)
mooduloDesccricaoRoutes.delete('/delete/:id', ModuloInspecaoController.destroyModuloInspecao)
mooduloDesccricaoRoutes.put('/update/:id', ModuloInspecaoController.updateModuloInspecao)

export default mooduloDesccricaoRoutes