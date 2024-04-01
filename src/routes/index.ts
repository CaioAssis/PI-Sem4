import { Router } from 'express'
import funcionarioRoutes from './funcionario/funcionario.routes'

const routes = Router()

routes.use('/func',funcionarioRoutes)

export default routes