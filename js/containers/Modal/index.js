// @flow
import type { Dispatch } from 'redux'
import { connect } from 'react-redux'
import * as actions from 'misago/actions/modal'
import Modal from './Modal'

const mapStateToProps = (state: Object) => {
  return state.modal
}

const mapDisaptchToProps = (dispatch: Dispatch<*>) => {
  return {
    onHide: () => {
      return dispatch(actions.hideModal())
    },
    onClosed: () => {
      return dispatch(actions.unmountModal())
    }
  }
}

const ConnectedModal = connect(mapStateToProps, mapDisaptchToProps)(Modal)

export default ConnectedModal
export { mapStateToProps }