// @flow
import * as React from 'react'

type Props = {
  errors: FormErrors
}

const Alert = ({ errors }: Props) => {
  if (!errors.__all__ || !errors.__all__[0]) return null

  return (
    <div className="alert alert-danger" role="alert">
      {errors.__all__[0]}
    </div>
  )
}

export default Alert