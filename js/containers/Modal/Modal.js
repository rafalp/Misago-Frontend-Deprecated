import React from 'react'
import ReactDOM from 'react-dom'
import Modal from 'reactstrap/lib/Modal'

const ModalContainer = ({ children, className, isOpen, onClosed, onHide }) => {
  return ReactDOM.createPortal(
    <Modal
      className={className}
      isOpen={isOpen}
      toggle={onHide}
      onClosed={onClosed}
    >
      {children}
    </Modal>,
    document.getElementById('modal-root')
  )
}

export default ModalContainer