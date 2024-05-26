//contato dos funcionários de inspeção + verificadores + login do sistema

import { Router } from 'express'
import FuncionarioController from '../../controllers/funcionario/funcionario.controller'
import authMiddleware from '../../middlewares/auth.middleware'

const funcRoutes = Router()

funcRoutes.post('/register', FuncionarioController.store) // cadastra
funcRoutes.post('/login', FuncionarioController.login) //login
funcRoutes.get('/', FuncionarioController.index) // lista todos
funcRoutes.get('/:id', FuncionarioController.show) //lista um
funcRoutes.delete('/:id', authMiddleware, FuncionarioController.delete)
funcRoutes.put('/:id', authMiddleware, FuncionarioController.update)

export default funcRoutes