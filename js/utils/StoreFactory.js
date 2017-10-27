import OrderedList from './OrderedList'

class StoreFactory {
  constructor() {
    this._items = new OrderedList()
  }
}

export default StoreFactory