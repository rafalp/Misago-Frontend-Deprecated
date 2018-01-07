// @flow
import * as React from 'react'
import SignInForm from 'misago/containers/SignInForm'
import getCSRFToken from 'misago/utils/getCSRFToken'
import { showModal } from './modal'

type SignInCredentials = {
  username: string,
  password: string
}

type SubmitForm = (data: FormData, FormSetSubmitting, FormSetErrors) => void

const openForm = () => {
  return (dispatch: Dispatch) => {
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

const submitForm: SubmitForm = (data, setSubmitting, setErrors) => {
  return (dispatch: Dispatch) => {
    const form = document.getElementById('auth-login')
    if (!form) return

    const username = document.createElement('input')
    username.type = 'text'
    username.name = 'username'
    username.value = data.username
    form.appendChild(username)

    const password = document.createElement('input')
    password.type = 'password'
    password.name = 'password'
    password.value = data.password
    form.appendChild(password)

    form.querySelector('input[type="hidden"]').value = getCSRFToken()
    form.querySelector('input[name="redirect_to"]').value = window.location.pathname

    form.submit()
  }
}

export {
  openForm,
  cleanForm,
  submitForm
}