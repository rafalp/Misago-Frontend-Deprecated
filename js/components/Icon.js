// @flow
import classNames from 'classnames'
import * as React from 'react'

export type Props = {
  className?: string,
  name: string
}

const Icon = ({ className, name }: Props) => {
  return (
    <span className={classNames('material-icons', className)}>
      {name.replace(' ', '_')}
    </span>
  )
}

export default Icon