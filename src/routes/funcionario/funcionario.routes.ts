//contato dos funcionários de inspeção + verificadores + login do sistema

import { Router } from 'express'
import FuncionarioController from '../../controllers/funcionario/funcionario.controller'
import authMiddleware from '../../middlewares/auth.middleware'

const funcRoutes = Router()

funcRoutes.post('/save', FuncionarioController.store)
funcRoutes.post('/login', FuncionarioController.login)
funcRoutes.get('/get', FuncionarioController.index) //PARA TESTES - PROBLEMA DE SEGURANÇA
funcRoutes.get('/get/:id', FuncionarioController.show)
funcRoutes.delete('/delete/:id', FuncionarioController.delete)
funcRoutes.put('/update/:id', FuncionarioController.update)
funcRoutes.put('/master/:id', FuncionarioController.updateRole)

export default funcRoutes