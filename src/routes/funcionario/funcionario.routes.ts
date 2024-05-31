//contato dos funcionários de inspeção + verificadores + login do sistema

import { Router } from 'express'
import FuncionarioController from '../../controllers/funcionario/funcionario.controller'
import authMiddleware from '../../middlewares/auth.middleware'

const funcRoutes = Router()

funcRoutes.post('/save', FuncionarioController.store) // cadastra
funcRoutes.post('/login', FuncionarioController.login) //login
funcRoutes.get('/get', FuncionarioController.index) // lista todos
funcRoutes.get('/get/:id', FuncionarioController.show) //lista um
funcRoutes.delete('/delete/:id', FuncionarioController.delete)
funcRoutes.put('/update/:id', FuncionarioController.update)

export default funcRoutes