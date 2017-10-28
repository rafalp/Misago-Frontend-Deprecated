// @flow
import moment from 'moment'
import hydrateMoment from './hydrateMoment'

const hydrateUser = (data: Object): User => {
  return Object.assign(new Object(), data, {
    joined_on: hydrateMoment(data.joined_on)
  })
}

export default hydrateUser