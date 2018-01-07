// @flow
import cloneDeep from 'lodash.clonedeep'
import * as React from 'react'
import { validateValue } from 'misago/utils/validators'

type FormOnClean = (FormData, FormValidators, FormSetErrors) => FormData | false
type FormOnSubmit = (FormData, FormSetSubmitting, FormSetErrors) => void

export type WrapperProps = {
  component: React.ComponentType<*>,
  initialData: FormData,
  validators?: FormValidators,
  onClean: FormOnClean,
  onSubmit: FormOnSubmit
}

export type Props = {
  data: FormData,
  errors: FormErrors,
  initialData: FormData,
  validators: FormValidators,
  isSubmitting: boolean,
  setErrors: FormSetErrors,
  setSubmitting: FormSetSubmitting,
  onChange: (string, any) => void,
  onSubmit: (?SyntheticEvent<HTMLFormElement>) => ?boolean
}

type State = {
  isSubmitting: boolean,
  data: FormData,
  errors: FormErrors
}

class Component extends React.Component<WrapperProps, State> {
  validators: FormValidators

  constructor(props: WrapperProps) {
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

  onSubmit = (ev: ?SyntheticEvent<HTMLFormElement>) => {
    if (ev) ev.preventDefault()
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

  render = () => {
    const Component = this.props.component
    const props = Object.assign({}, this.props, {
      data: this.state.data,
      errors: this.state.errors,
      initialData: this.props.initialData,
      validators: this.validators,
      isSubmitting: this.state.isSubmitting,
      setErrors: this.setErrors,
      setSubmitting: this.setSubmitting,
      onChange: this.onChange,
      onSubmit: this.onSubmit
    })

    return (
      <Component {...props} />
    )
  }
}

export default Component