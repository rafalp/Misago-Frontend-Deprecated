// @flow
import { store as initialState } from './constants'
import * as normalizers from './normalizers'
import { authReducer } from './reducers'
import { categoriesReducer } from './reducers'
import { modalReducer } from './reducers'
import StoreFactory from './utils/StoreFactory'

const store: StoreFactory = new StoreFactory()

store.add('auth', authReducer, normalizers.normalizeUser(initialState.auth))
store.add('categories', categoriesReducer, initialState.categories)
store.add('modal', modalReducer)

export default store