import classNames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

const Icon = ({ className, name }) => {
  return (
    <span className={classNames('material-icons', className)}>
      {name.replace(' ', '_')}
    </span>
  )
}

Icon.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired
}

export default Icon