//Entidade Associativa que determina que módulos a máquina específica solicita

import { Router } from 'express'
import authMiddleware from '../../middlewares/auth.middleware'

const listaModuloRoutes = Router()

export default listaModuloRoutes