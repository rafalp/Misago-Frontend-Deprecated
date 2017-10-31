import StoreFactory from '../StoreFactory'

test('add() inserts new Reducer', () => {
  const factory = new StoreFactory()

  const reducer = (state, action)  => {
    return state
  }
  factory.add('reducer', reducer)

  expect(factory.reducers).toEqual({ reducer })
})

test('add() inserts initial state', () => {
  const factory = new StoreFactory()

  const reducer = (state, action)  => {
    return state
  }
  const initialState = { count: 42 }

  factory.add('reducer', reducer, initialState)

  expect(factory.initialState).toEqual({ reducer: initialState })
})

test('create() creates store with combined reducers', () => {
  const factory = new StoreFactory()

  const city = (state, action)  => {
    return state || { city: 'wroclaw' }
  }
  factory.add('city', city)

  const user = (state, action)  => {
    return state || { user: 'bob' }
  }
  factory.add('user', user)

  const store = factory.create()
  expect(store.getState()).toEqual({
    city: { city: 'wroclaw' },
    user: { user: 'bob' }
  })
})