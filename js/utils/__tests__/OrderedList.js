import OrderedList from '../OrderedList'

test('add() inserts new OrderedListItem', () => {
  const list = new OrderedList()
  list.add('test', 42)

  expect(list.unordered).toEqual([
    {
      key: 'test',
      item: 42,

      after: null,
      before: null
    }
  ])
})

test('add() inserts new OrderedListItem with after', () => {
  const list = new OrderedList()
  list.add('test', 42, { after: '_end' })

  expect(list.unordered).toEqual([
    {
      key: 'test',
      item: 42,

      after: '_end',
      before: null
    }
  ])
})

test('add() inserts new OrderedListItem with before', () => {
  const list = new OrderedList()
  list.add('test', 42, { before: '_end' })

  expect(list.unordered).toEqual([
    {
      key: 'test',
      item: 42,

      after: null,
      before: '_end'
    }
  ])
})

test('get() returns OrderedListItem', () => {
  const list = new OrderedList()
  list.add('test', 42)
  expect(list.get('test')).toBe(42)
})

test('get() returns null for nonexistant key', () => {
  const list = new OrderedList()
  list.add('test', 42)
  expect(list.get('doesntexist')).toBe(null)
})

test('get() returns fallback for nonexistant key', () => {
  const list = new OrderedList()
  list.add('test', 42)
  expect(list.get('doesntexist', 'fallback')).toBe('fallback')
})

test('has() returns true for existing key', () => {
  const list = new OrderedList()
  list.add('test', 42)
  expect(list.has('test')).toBe(true)
})

test('has() returns false for nonexistant key', () => {
  const list = new OrderedList()
  list.add('test', 42)
  expect(list.has('doesntexist')).toBe(false)
})

test('values() result is cached', () => {
  const list = new OrderedList()

  list.add('a', 1)
  list.add('b', 2)

  const result = list.values()

  expect(list.values()).toBe(result)
})

test('values() returns nonordered items in order of insertion', () => {
  const list = new OrderedList()

  list.add('a', 1)
  list.add('b', 2)
  list.add('c', 3)

  expect(list.values()).toEqual([1, 2, 3])
})

test('values() uses after clause', () => {
  const list = new OrderedList()

  list.add('a', 1)
  list.add('b', 2)
  list.add('c', 3, { after: 'a' })

  expect(list.values()).toEqual([1, 3, 2])
})

test('values() uses before end clause', () => {
  const list = new OrderedList()

  list.add('a', 1, { after: '_end' })
  list.add('b', 2)
  list.add('c', 3)

  expect(list.values()).toEqual([2, 3, 1])
})

test('values() uses before clause', () => {
  const list = new OrderedList()

  list.add('a', 1)
  list.add('b', 2)
  list.add('c', 3, { before: 'a' })

  expect(list.values()).toEqual([3, 1, 2])
})

test('values() uses before end clause', () => {
  const list = new OrderedList()

  list.add('a', 1)
  list.add('b', 2, { before: '_end' })
  list.add('c', 3)

  expect(list.values()).toEqual([1, 3, 2])
})

test('values() with multiple before and after clauses works', () => {
  const list = new OrderedList()

  list.add('a', 1)
  list.add('b', 2, { after: '_end' })
  list.add('c', 3, { before: 'a' })
  list.add('d', 4, { after: 'c' })
  list.add('e', 5, { before: '_end' })
  list.add('f', 6)

  expect(list.values()).toEqual([3, 4, 1, 6, 5, 2])
})