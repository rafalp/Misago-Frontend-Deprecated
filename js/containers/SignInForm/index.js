// @flow
import type { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { hideModal } from 'misago/actions/modal'
import { cleanForm, submitForm } from 'misago/actions/signin'
import Form from './Form'

const mapDispatchToProps = (dispatch: Dispatch<*>) => {
  return {
    onHide: () => {
      return dispatch(hideModal())
    },
    onClean: cleanForm,
    onSubmit: (data, setSubmitting, setErrors) => {
      return dispatch(submitForm(data, setSubmitting, setErrors))
    }
  }
}

const ConnectedForm = connect(null, mapDispatchToProps)(Form)

export default ConnectedForm
