import classNames from 'classnames'
import PropTypes from 'prop-types';
import React from 'react'

const Icon = ({ name, className }) => {
  return (
    <span className={classNames('material-icons', className)}>
      {name.replace(' ', '_')}
    </span>
  )
}

Icon.propTypes = {
  name: PropTypes.string
};

export default Icon