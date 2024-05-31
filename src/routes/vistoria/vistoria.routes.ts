//Entidade que liga a inspeção preenchida ao funcionário que a preencheu e à máquina condizente.

import { Router } from 'express'
import authMiddleware from '../../middlewares/auth.middleware'
import Vistoria from '../../controllers/vistoria/vistoria.controller'

const vistRoutes = Router()

vistRoutes.post('/', Vistoria.createVistoria)//rota para salvar
vistRoutes.get('/', Vistoria.getVistoria)//lista todas as vistorias
vistRoutes.get('/:id', Vistoria.getVistoriaById)//lista a vistoria por id
vistRoutes.get('/getm/:id', Vistoria.getVistoriaByMaq)
vistRoutes.delete('/:id', Vistoria.destroyVistoria)//elimina a vistoria por id
vistRoutes.put('/:id', Vistoria.updateVistoria)//atualiza vistoria por id

export default vistRoutes