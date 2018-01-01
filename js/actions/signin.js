import React from 'react'
import SignInForm from 'misago/containers/SignInForm'
import { showModal } from './modal'

const openForm = () => {
  return (dispatch) => {
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

const cleanForm = (data, validators, setErrors) => {
  const cleanedData = {
    username: data.username.trim(),
    password: data.password.trim()
  }

  if (cleanedData.username.length === 0 || cleanedData.password.length === 0) {
    setErrors({ __all__: [gettext('Fill in both fields.')] })
    return false
  }

  return cleanedData
}

const submitForm = (data, setSubmitting, setErrors) => {
  return (dispatch) => {
    console.log('SUBMIT FORM!')
  }
}

export {
  openForm,
  cleanForm,
  submitForm
}