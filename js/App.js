import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import AuthPoll from './containers/AuthPoll'
import Navbar from './containers/Navbar'
import Modal from './containers/Modal'
import router from './router'
import store from './store'

const App = () => {
  return (
    <Provider store={store.create()}>
      <AuthPoll>
        <BrowserRouter>
          <div className="misago-app">
            <Navbar />
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
            <Modal />
          </div>
        </BrowserRouter>
      </AuthPoll>
    </Provider>
  )
}

export default App
