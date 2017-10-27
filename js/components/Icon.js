import React from 'react'

const Icon = ({ icon }) => {
  return (
    <span className="material-icons">
      {icon.replace(' ', '_')}
    </span>
  )
}

export default Icon