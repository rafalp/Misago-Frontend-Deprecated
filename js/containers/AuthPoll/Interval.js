// @flow
import * as React from 'react'

type IntervalProps = {
  children: any,
  poll: boolean
}

const frequency = 40 * 1000 // 40s

const Interval = class extends React.Component<IntervalProps> {
  intervalId: ?number

  constructor(props: IntervalProps) {
    super(props)

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

export default Interval