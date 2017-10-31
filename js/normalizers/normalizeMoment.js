// @flow
import type MomentObject from 'moment'
import moment from 'moment'

const normalizeMoment = (data: string | void | null): MomentObject | null => {
  return data ? moment(data) : null
}

export default normalizeMoment