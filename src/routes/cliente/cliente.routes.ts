//Contato dos compradores

import { Router } from 'express'
import authMiddleware from '../../middlewares/auth.middleware'
import ClienteController from '../../controllers/cliente/cliente.controller'

const clienteRoutes = Router()

clienteRoutes.get('/', ClienteController.index)
clienteRoutes.get('/:id', ClienteController.show)
clienteRoutes.delete('/:id',ClienteController.delete)
clienteRoutes.put('/:id',ClienteController.update)

export default clienteRoutes