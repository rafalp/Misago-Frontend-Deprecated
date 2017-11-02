import React from 'react'

export default class extends React.Component {
  constructor(props) {
    super(props)

    this.validators = {}
  }

  onChange = (name, value) => {
    this.setState((prevState, props) => {
      return {
        [name]: value,
        errors: Object.assign({}, prevState.errors, {
          [name]: validateValue(value, this.validators[name])
        })
      }
    })
  }

  onSubmit = (ev) => {
    ev.preventDefault()

    if (this.state.isLoading) return false

    if (this.clean()) {
      this.setState({ isLoading: true })

      this.send().then(this.sendSuccess, this.sendRejection)
    }

    return false
  }

  clean = () => {
    const errors = this.validate()
    if (this.getFirstError(errors)) {
      this.addErrors(errors)

      snackbar.error("Formularz zawiera błędy.")
      return false
    }

    return true
  }

  validate = () => {
    return validateForm(this.state, this.validators)
  }

  getFirstError = (errors) => {
    return iterateObject(this.validators, (validators, field) => {
      const fieldErrors = errors[field]
      if (!!fieldErrors && fieldErrors.length) return fieldErrors[0]
    }) || false
  }

  addErrors = (newErrors) => {
    let finalErrors = {}

    iterateObject(this.validators, (validators, field) => {
      const newFieldErrors = newErrors[field]
      const oldFieldErrors = this.state.errors[field]

      if (!!newFieldErrors && newFieldErrors.length) {
        finalErrors[field] = [...newFieldErrors]
      } else if (!!oldFieldErrors && oldFieldErrors.length) {
        finalErrors[field] = [...oldFieldErrors]
      }
    })

    this.setState({ errors: finalErrors })
  }

  useApiErrors = (apiErrors) => {
    let finalErrors = {}

    for (const field in this.validators) {
      if (this.validators.hasOwnProperty(field)) {
        const fieldErrors = apiErrors[field]

        if (!!fieldErrors && fieldErrors.length) {
          finalErrors[field] = [...fieldErrors]
        } else {
          finalErrors[field] = []
        }
      }
    }

    this.setState({ errors: finalErrors })
  }

  send = () => {
    return null // should return ajax promise
  }

  sendSuccess = (data) => {
    this.setState({ isLoading: false })
    this.onSuccess(data)
  }

  sendRejection = (data) => {
    this.setState({ isLoading: false })
    this.onRejection(data)
  }

  onSuccess = (data) => {
    // do something!
  }

  onRejection = (rejection) => {
    snackbar.apiError(rejection)
  }
}