import React from 'react'

const PollFrequency = 30000

const Auth = class extends React.Component {
  constructor() {
    super()

    this.intervalId = null
  }

  componentDidMount() {
    this.intervalId = window.setInterval(
      () => {
        console.log('hit AUTH API for user data')
      },
      PollFrequency
    )
  }

  componentWillUnmount() {
    window.clearInterval(this.intervalId)
  }

  render() {
    return this.props.children
  }
}

export default Auth
