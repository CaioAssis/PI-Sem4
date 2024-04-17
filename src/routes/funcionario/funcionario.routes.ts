//contato dos funcionários de inspeção + verificadores + login do sistema

import { Router } from 'express'
import FuncionarioController from '../../controllers/funcionario/funcionario.controller'
import authMiddleware from '../../middlewares/auth.middleware'

const funcRoutes = Router()

funcRoutes.post('/register', FuncionarioController.store)
funcRoutes.post('/login', FuncionarioController.login)
funcRoutes.get('/all', authMiddleware, FuncionarioController.index) //PARA TESTES - PROBLEMA DE SEGURANÇA
funcRoutes.get('/:id', authMiddleware, FuncionarioController.show)
funcRoutes.delete('/:id', authMiddleware, FuncionarioController.delete)
funcRoutes.put('/:id', authMiddleware, FuncionarioController.update)
funcRoutes.put('/master/:id', authMiddleware, FuncionarioController.updateRole)

export default funcRoutes