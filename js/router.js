// @flow
import { url } from './constants'
import TestRoute from './routes/TestRoute'
import RouterFactory from './utils/RouterFactory'

const router: RouterFactory = new RouterFactory(url.index)

router.add('index', '/', TestRoute)
router.add('terms-of-service', 'terms-of-service/', TestRoute)

export default router