// @flow
import OrderedList from './OrderedList'

class RouterFactory {
  basepath: string
  orderedlist: OrderedList

  constructor(basepath: string='/'): void {
    this.basepath = basepath
    this.orderedlist = new OrderedList()
  }

  normalizePath(path: string): string {
    if (path === '/') return this.basepath
    if (path.substr(0, 1) === '/') {
      return this.basepath + path.substr(1)
    }
    return this.basepath + path
  }

  add(key: string, path: string, component: mixed, order?: { after?: string, before?: string }): void {
    this.orderedlist.add(key, { key, component, path: this.normalizePath(path) }, order)
  }

  routes():Array<mixed> {
    return this.orderedlist.values()
  }
}

export default RouterFactory