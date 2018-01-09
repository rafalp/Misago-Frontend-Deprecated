// @flow
import * as React from 'react'
import ReactDOM from 'react-dom'
import Modal from 'reactstrap/lib/Modal'

type Props = {
  children: React.ComponentType<*>,
  className: ?string,
  isOpen: boolean,
  onClosed: mixed,
  onHide: mixed
}

const ModalContainer = ({ children, className, isOpen, onClosed, onHide }: Props) => {
  const modalRoot = document.getElementById('modal-root')
  if (!(modalRoot instanceof Element)) return

  return ReactDOM.createPortal(
    <Modal
      className={className}
      isOpen={isOpen}
      toggle={onHide}
      onClosed={onClosed}
    >
      {children}
    </Modal>,
    modalRoot
  )
}

export default ModalContainer