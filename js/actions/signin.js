// @flow
import * as React from 'react'
import { login } from 'misago/actions/auth'
import { api } from 'misago/constants'
import SignInForm from 'misago/containers/SignInForm'
import { normalizeUser } from 'misago/normalizers'
import ajax from 'misago/utils/ajax'
import { showModal } from './modal'

type CleanForm = (SignInCredentials, FormValidators, FormSetErrors) => SignInCredentials | false
type SubmitForm = (SignInCredentials, FormSetSubmitting, FormSetErrors) => any

const openForm = (): any => {
  return (dispatch: Dispatch<*>) => {
    const component = (
      <SignInForm
        initialData={{
          username: '',
          password: ''
        }}
      />
    )

    dispatch(showModal(component, 'modal-sign-in'))
  }
}

const cleanForm: CleanForm = (data, validators, setErrors) => {
  const cleanedData: SignInCredentials = {
    username: data.username.trim(),
    password: data.password.trim()
  }

  if (cleanedData.username.length === 0 || cleanedData.password.length === 0) {
    setErrors({ non_field_errors: [gettext('Fill in both fields.')] })
    return false
  }

  return cleanedData
}

const submitForm: SubmitForm = (data, setSubmitting, setErrors) => {
  return (dispatch: Dispatch<*>) => {
    ajax.post(api + 'auth/', data).then((userData: {}) => {
      const user: AuthenticatedUser = normalizeUser(userData)
      dispatch(login(data, user))
    }).catch((rejection) => {
      if (rejection.response) {
        setErrors(rejection.response.data)
      } else {
        console.log('dc!')
      }
    })
  }
}

export {
  openForm,
  cleanForm,
  submitForm
}