import { Router } from 'express'

import funcRoutes from './funcionario/funcionario.routes'
import clienteRoutes from './cliente/cliente.routes'
import maqRoutes from './maquina/maquina.routes'
import listaModuloRoutes from './modulo/listaModulo.routes'
import moduloDescRoutes from './modulo/moduloDesc.routes'
import vistRoutes from './vistoria/vistoria.routes'
import moduloInspecaoRoutes from './moduloInspecao/moduloInspecao.routes'

const routes = Router()

routes.use('/func',funcRoutes)
routes.use('/client', clienteRoutes)
routes.use('/maquina',maqRoutes)
routes.use('/modlist',listaModuloRoutes)
routes.use('/moddesc',moduloDescRoutes)
routes.use('/moduloInspecao', moduloInspecaoRoutes)
routes.use('/insp', vistRoutes)

export default routes