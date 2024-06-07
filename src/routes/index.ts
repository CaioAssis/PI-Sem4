import { Router } from 'express'

import funcRoutes from './funcionario/funcionario.routes'
import clienteRoutes from './cliente/cliente.routes'
import maqRoutes from './maquina/maquina.routes'
import moduloDescricaoRoutes from './moduloDescricao/moduloDescricao.routes'
import vistRoutes from './vistoria/vistoria.routes'

const routes = Router()

routes.use('/usuario',funcRoutes)
routes.use('/cliente', clienteRoutes)
routes.use('/maquina',maqRoutes)
routes.use('/modulo',moduloDescricaoRoutes)
routes.use('/vistoria', vistRoutes)

export default routes