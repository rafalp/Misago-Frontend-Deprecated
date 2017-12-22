// @flow
import OrderedList from './OrderedList'

class MenuFactory {
  orderedlist: OrderedList

  constructor(): void {
    this.orderedlist = new OrderedList()
  }

  add(item: MenuItem, order?: { after?: string, before?: string }): void {
    this.orderedlist.add(item.key, item, order)
  }

  items():Array<MenuItem> {
    return this.orderedlist.values()
  }
}

export default MenuFactory