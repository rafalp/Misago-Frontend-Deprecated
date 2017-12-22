// @flow
import TestRoute from './routes/TestRoute'
import RouterFactory from './utils/RouterFactory'

const router: RouterFactory = new RouterFactory()

router.add('threads', '/', TestRoute)
router.add('categories', '/categories/', TestRoute)
router.add('users', '/users/', TestRoute)
router.add('terms-of-service', '/terms-of-service/', TestRoute)

export default router