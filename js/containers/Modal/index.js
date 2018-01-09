// @flow
import type { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { hideModal, unmountModal } from 'misago/actions/modal'
import Modal from './Modal'

const mapStateToProps = (state: Object) => {
  return state.modal
}

const mapDispatchToProps = (dispatch: Dispatch<*>) => {
  return {
    onHide: () => {
      return dispatch(hideModal())
    },
    onClosed: () => {
      return dispatch(unmountModal())
    }
  }
}

const ConnectedModal = connect(mapStateToProps, mapDispatchToProps)(Modal)

export default ConnectedModal