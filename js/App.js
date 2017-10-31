import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import AuthPoll from './containers/AuthPoll'
import Modal from './containers/Modal'
import Navbar from './containers/Navbar'
import router from './router'
import store from './store'

const App = () => {
  // initialize router and store on render!
  return (
    <Provider store={store.create()}>
      <AuthPoll>
        <BrowserRouter>
          <Switch>
            {router.routes().map((route) => (
              <Route
                component={route.component}
                key={route.key}
                path={route.path}
                exact
              />
            ))}
          </Switch>
        </BrowserRouter>
        <Navbar />
        <Modal />
      </AuthPoll>
    </Provider>
  )
}

export default App
