import { actions } from 'misago/constants'

const showModal = (children, className=null) => {
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