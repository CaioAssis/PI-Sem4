//contato dos funcionários de inspeção + verificadores + login do sistema

import { Router } from 'express'
import FuncionarioController from '../../controllers/funcionario/funcionario.controller'
import authMiddleware from '../../middlewares/auth.middleware'

const funcRoutes = Router()

funcRoutes.post('/save', FuncionarioController.store)
funcRoutes.post('/login', FuncionarioController.login)
funcRoutes.get('/get', authMiddleware, FuncionarioController.index) //PARA TESTES - PROBLEMA DE SEGURANÇA
funcRoutes.get('/get/:id', authMiddleware, FuncionarioController.show)
funcRoutes.delete('/delete/:id', authMiddleware, FuncionarioController.delete)
funcRoutes.put('/update/:id', authMiddleware, FuncionarioController.update)
funcRoutes.put('/master/:id', authMiddleware, FuncionarioController.updateRole)

export default funcRoutes