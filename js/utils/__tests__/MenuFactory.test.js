import MenuFactory from '../MenuFactory'

test('add() inserts new item in menu', () => {
  const factory = new MenuFactory()
  const item = {
    key: 'thread',
    text: 'threads',
    url: '/supersecret/'
  }

  factory.add(item)

  expect(factory.items()).toEqual([item])
})
