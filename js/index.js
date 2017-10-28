import React from 'react'
import ReactDOM from 'react-dom'
import App from 'misago/App'
import Style from '../scss/style.scss' // eslint-disable-line no-unused-vars

const init = () => {
  ReactDOM.render(<App />, document.getElementById('app-root'))
}

export { init }
