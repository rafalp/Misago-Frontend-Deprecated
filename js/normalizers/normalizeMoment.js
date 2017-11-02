// @flow
import type MomentObject from 'moment'
import moment from 'moment'

const normalizeMoment = (data: ?string): ?MomentObject => {
  return data ? moment(data) : null
}

export default normalizeMoment