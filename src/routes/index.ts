import { Router } from 'express'

import funcRoutes from './funcionario/funcionario.routes'
import clienteRoutes from './cliente/cliente.routes'
import maqRoutes from './maquina/maquina.routes'
import moduloDescricaoRoutes from './moduloDescricao/moduloDescricao.routes'
import vistRoutes from './vistoria/vistoria.routes'

const routes = Router()

routes.use('/func',funcRoutes)
routes.use('/client', clienteRoutes)
routes.use('/maquina',maqRoutes)
routes.use('/moddesc',moduloDescricaoRoutes)
routes.use('/insp', vistRoutes)

export default routes