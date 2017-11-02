// @flow
class OrderedList {
  isOrdered: boolean
  unordered: Array<OrderedListItem>
  items: Array<mixed>

  constructor(): void {
    this.isOrdered = false
    this.unordered = []
    this.items = []
  }

  add(key: string, item: mixed, order?: { after?: string, before?: string }): void {
    this.unordered.push({
      key: key,
      item: item,

      after: order ? order.after || null : null,
      before: order ? order.before || null : null
    })
  }

  get(key: string, value: ?mixed): ?mixed {
    const length: number = this.unordered.length
    for (let i = 0; i < length; i++) {
      if (this.unordered[i].key === key) {
        return this.unordered[i].item
      }
    }

    return value || null
  }

  has(key: string): boolean {
    return this.get(key) !== null
  }

  values(): Array<mixed> {
    if (!this.isOrdered) {
      this.items = this._order(this.unordered)
      this.isOrdered = true
    }

    return this.items
  }

  _order(unordered: Array<OrderedListItem>): Array<mixed> {
    // Index of unordered items
    const index: Array<string> = []
    unordered.forEach((item: OrderedListItem): void => {
      index.push(item.key)
    })

    // Ordered items
    const ordered: Array<OrderedListItem> = []
    const ordering: Array<string> = []

    // First pass: register items that
    // don't specify their order
    unordered.forEach((item: OrderedListItem): void => {
      if (!item.after && !item.before) {
        ordered.push(item)
        ordering.push(item.key)
      }
    })

    // Second pass: register items that
    // specify their before to "_end"
    unordered.forEach((item: OrderedListItem): void => {
      if (item.before === '_end') {
        ordered.push(item)
        ordering.push(item.key)
      }
    })

    // Third pass: register items that
    // specify their after to "_end"
    unordered.forEach((item: OrderedListItem): void => {
      if (item.after === '_end') {
        ordered.push(item)
        ordering.push(item.key)
      }
    })

    // Fourth pass: keep iterating items until we
    // hit iterations limit or finish ordering list
    const insertItem = (item: OrderedListItem): void => {
      let insertAt = -1
      if (ordering.indexOf(item.key) === -1) {
        if (item.after) {
          insertAt = ordering.indexOf(item.after)
          if (insertAt !== -1) {
            insertAt += 1
          }
        } else if (item.before) {
          insertAt = ordering.indexOf(item.before)
        }

        if (insertAt !== -1) {
          ordered.splice(insertAt, 0, item)
          ordering.splice(insertAt, 0, item.key)
        }
      }
    }

    let iterations = 200
    while (iterations > 0 && index.length !== ordering.length) {
      iterations -= 1
      unordered.forEach(insertItem)
    }

    return ordered.map((item: OrderedListItem): mixed => {
      return item.item
    })
  }
}


export default OrderedList