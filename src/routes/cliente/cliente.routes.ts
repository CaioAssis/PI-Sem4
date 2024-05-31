//Contato dos compradores

import { Router } from 'express'
import authMiddleware from '../../middlewares/auth.middleware'
import ClienteController from '../../controllers/cliente/cliente.controller'

const clienteRoutes = Router()

clienteRoutes.post('/save', ClienteController.store)
clienteRoutes.get('/get', ClienteController.index)
clienteRoutes.get('/get/:id', ClienteController.show)
clienteRoutes.delete('/delete/:id',ClienteController.delete)
clienteRoutes.put('/update/:id',ClienteController.update)

export default clienteRoutes