// @flow
import type { MapStateToProps } from 'react-redux'
import { connect } from 'react-redux'
import Interval from './Interval'

const mapStateToProps: MapStateToProps<Object, *, *> = (state: Object): Object => {
  return {
    poll: !!state.auth.id
  }
}

const AuthPoll = connect(mapStateToProps)(Interval)

export default AuthPoll