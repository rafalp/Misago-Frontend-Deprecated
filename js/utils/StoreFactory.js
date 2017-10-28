// @flow
import type { Reducer } from 'redux'
import { applyMiddleware, combineReducers, createStore } from 'redux'
import ReduxThunk from 'redux-thunk';

class StoreFactory {
  reducers: { [string]: Reducer<State, Action> }

  constructor(): void {
    this.reducers = {}
  }

  add(key: string, reducer: Reducer<State, Action>): void {
    this.reducers[key] = reducer
  }

  createStore() {
    return createStore(
      combineReducers(this.reducers),
      applyMiddleware(ReduxThunk)
    )
  }
}

export default StoreFactory