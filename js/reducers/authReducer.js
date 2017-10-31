//@flow
const initialState: AuthenticatedUser = {
  id: null,
  acl: {}
}

const authReducer = (state: AuthenticatedUser = initialState, action: Action) => {
  return state
}

export default authReducer