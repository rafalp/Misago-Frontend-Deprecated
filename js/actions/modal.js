// @flow
import * as React from 'react'
import { actions } from 'misago/constants'

const showModal = (children: React.Node, className: ?string=null) => {
  return {
    children,
    className,

    type: actions.SHOW_MODAL
  }
}

const hideModal = () => {
  return {
    type: actions.HIDE_MODAL
  }
}

const unmountModal = () => {
  return {
    type: actions.UNMOUNT_MODAL
  }
}

export {
  showModal,
  hideModal,
  unmountModal
}