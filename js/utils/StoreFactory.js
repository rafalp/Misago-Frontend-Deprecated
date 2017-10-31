// @flow
import type { Reducer } from 'redux'
import { applyMiddleware, combineReducers, createStore } from 'redux'
import ReduxThunk from 'redux-thunk'

class StoreFactory {
  reducers: { [string]: Reducer<State, Action> }
  initialState: { [string]: Object }

  constructor(): void {
    this.reducers = {}
    this.initialState = {}
  }

  add(key: string, reducer: Reducer<State, Action>, initialState: Object | null = null): void {
    this.reducers[key] = reducer
    if (initialState) {
      this.initialState[key] = initialState
    }
  }

  create() {
    return createStore(
      combineReducers(this.reducers),
      this.initialState,
      applyMiddleware(ReduxThunk)
    )
  }
}

export default StoreFactory