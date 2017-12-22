// @flow
import trim from 'lodash.trim'
import OrderedList from './OrderedList'

class RouterFactory {
  basepath: string
  orderedlist: OrderedList<Route>
  urls: { [string]: string }

  constructor(basepath: string='/'): void {
    this.basepath = basepath
    this.orderedlist = new OrderedList()
    this.urls = {}
  }

  normalizePath(path: string): string {
    const trimmedPath: string = trim(path, '/')
    if (!trimmedPath) return this.basepath
    return this.basepath + trimmedPath + '/'
  }

  add(name: string, path: string, component: any, order?: { after?: string, before?: string }): void {
    const normalizedPath: string = this.normalizePath(path)

    this.orderedlist.add(name, { component, key: name, path: normalizedPath }, order)
    this.urls[name] = normalizedPath
  }

  url(name: string, params: ?{ [string]: string | number }): ?string {
    if (!this.urls[name]) return undefined // path not found
    if (!params) return this.urls[name] // path without params

    const segments: Array<string> = this.urls[name].split('/')
    const replacedSegments = segments.map((segment: string): string => {
      if (params && segment.substr(0, 1) === ':') {
        const param = segment.substr(1)
        if (params[param]) {
          return params[param].toString()
        }
      }
      return segment
    })

    return replacedSegments.join('/')
  }

  routes():Array<Route> {
    return this.orderedlist.values()
  }
}

export default RouterFactory