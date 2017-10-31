//@flow
import { actions } from 'misago/constants'

const initialState: ModalState = {
  isOpen: false,
  className: null,
  children: null
}

const modalReducer = (state: ModalState = initialState, action: Action) => {
  if (action.type === actions.SHOW_MODAL) {
    return {
      isOpen: true,
      className: action.className,
      children: action.children
    }
  }

  if (action.type === actions.HIDE_MODAL) {
    return Object.assign({}, state, { isOpen: false })
  }

  if (action.type === actions.UNMOUNT_MODAL) {
    return Object.assign({}, state, { children: null })
  }

  return state
}

export default modalReducer