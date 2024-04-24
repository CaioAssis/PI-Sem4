//Máquina específica comprada

import { Router } from 'express'
import authMiddleware from '../../middlewares/auth.middleware'
import Maquina from '../../controllers/maquina/maquina.controller'

const maqRoutes = Router()

//rotas
maqRoutes.post('/save', Maquina.createMaquina) //cria
maqRoutes.get('/get', Maquina.getMaquina) //lista
maqRoutes.get('/get/:id', Maquina.getMaquinaById)//diferente mas igual, lista por id
maqRoutes.put('/update/:id', Maquina.updateMaquina) //Atualiza
maqRoutes.delete('/delete/:id', Maquina.destroyMaquina) //Deleta

export default maqRoutes