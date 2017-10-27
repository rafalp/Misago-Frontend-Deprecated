import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import Style from '../scss/style.scss' // eslint-disable-line no-unused-vars

const init = () => {
  ReactDOM.render(<App />, document.getElementById('app'))
}

export { init }
