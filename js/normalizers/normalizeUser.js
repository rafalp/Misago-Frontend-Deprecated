// @flow
import normalizeMoment from './normalizeMoment'

const normalizeUser = <T>(data: Object): T => {
  return (Object.assign({}, { id: null, acl: {} }, data, {
    joined_on: normalizeMoment(data.joined_on)
  }): $Shape<T>)
}

export default normalizeUser