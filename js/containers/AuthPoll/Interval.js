import PropTypes from 'prop-types'
import React from 'react'

const frequency = 40 * 1000 // 40s

const Interval = class extends React.Component {
  constructor() {
    super()

    this.intervalId = null
  }

  componentDidMount() {
    if (!this.props.poll) return

    this.intervalId = window.setInterval(
      () => {
        console.log('hit AUTH API for user data')
      },
      frequency
    )
  }

  componentWillUnmount() {
    if (this.intervalId) {
      window.clearInterval(this.intervalId)
    }
  }

  render() {
    return this.props.children
  }
}

Interval.propTypes = {
  poll: PropTypes.bool.isRequired
}

export default Interval