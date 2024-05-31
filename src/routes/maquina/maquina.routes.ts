//Máquina específica comprada

import { Router } from 'express'
import authMiddleware from '../../middlewares/auth.middleware'
import Maquina from '../../controllers/maquina/maquina.controller'

const maqRoutes = Router()

//rotas
maqRoutes.post('/', Maquina.createMaquina) //cria
maqRoutes.get('/', Maquina.getMaquina) //lista
maqRoutes.get('/:id', Maquina.getMaquinaById)//diferente mas igual, lista por id
maqRoutes.put('/:id', Maquina.updateMaquina) //Atualiza
maqRoutes.delete('/:id', Maquina.destroyMaquina) //Deleta

export default maqRoutes