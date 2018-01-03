import type { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { hideModal } from 'misago/actions/modal'
import { cleanForm, submitForm } from 'misago/actions/signin'
import SignInForm from './SignInForm'

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

const ConnectedSignInForm = connect(null, mapDispatchToProps)(SignInForm)

export default ConnectedSignInForm
