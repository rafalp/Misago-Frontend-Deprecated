import StoreFactory from '../StoreFactory'

test('add() inserts new Reducer', () => {
  const factory = new StoreFactory()

  const reducer = (state, action)  => {
    return state
  }
  factory.add('reducer', reducer)

  expect(factory.reducers).toEqual({ reducer })
})

test('createStore() creates store with combined reducers', () => {
  const factory = new StoreFactory()

  const city = (state, action)  => {
    return state || { city: 'wroclaw' }
  }
  factory.add('city', city)

  const user = (state, action)  => {
    return state || { user: 'bob' }
  }
  factory.add('user', user)

  const store = factory.createStore()
  expect(store.getState()).toEqual({
    city: { city: 'wroclaw' },
    user: { user: 'bob' }
  })
})