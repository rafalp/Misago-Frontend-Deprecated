// @flow
import RouterFactory from './RouterFactory'
import StoreFactory from './StoreFactory'

const Router: RouterFactory = new RouterFactory()
const Store: StoreFactory = new StoreFactory()

export { Router, Store }