// @flow
import cloneDeep from 'lodash.clonedeep'
import * as React from 'react'
import { validateValue } from 'misago/utils/validators'

class Form extends React.Component<FormProps, FormState> {
  validators: FormValidators

  constructor(props: FormProps) {
    super(props)

    this.state = {
      isSubmitting: false,
      data: cloneDeep(props.initialData),
      errors: {}
    }

    this.validators = props.validators || {}
  }

  onChange = (name: string, value: any) => {
    this.setState((prevState, props) => {
      return {
        data: Object.assign({}, prevState.data, {
          [name]: value
        }),
        errors: Object.assign({}, prevState.errors, {
          [name]: validateValue(value, this.validators[name])
        })
      }
    })
  }

  onSubmit = (ev: SyntheticEvent<HTMLFormElement>) => {
    ev.preventDefault()
    if (this.state.isSubmitting) return false
    this.clean()
    return false
  }

  clean = () => {
    const { onClean, onSubmit } = this.props
    const { data } = this.state

    const cleanedData = onClean(data, this.validators, this.setErrors)

    if (cleanedData !== false) {
      this.setSubmitting(true)
      onSubmit(cleanedData, this.setSubmitting, this.setErrors)
    }
  }

  setErrors = (errors: FormErrors) => {
    if (errors) this.setState({ errors })
  }

  setSubmitting = (isSubmitting: boolean) => {
    this.setState({ isSubmitting })
  }
}

export default Form