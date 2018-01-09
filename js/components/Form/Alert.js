// @flow
import * as React from 'react'

type Props = {
  errors: FormErrors
}

const Alert = ({ errors }: Props) => {
  if (!errors.non_field_errors || !errors.non_field_errors[0]) return null

  return (
    <div className="alert alert-danger" role="alert">
      {errors.non_field_errors[0]}
    </div>
  )
}

export default Alert