// @flow
import normalizeMoment from './normalizeMoment'

const normalizeUser = (data: Object): User => {
  return Object.assign({}, { id: null, acl: {} }, data, {
    joined_on: normalizeMoment(data.joined_on)
  })
}

export default normalizeUser