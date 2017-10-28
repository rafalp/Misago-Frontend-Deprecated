// @flow
import type MomentObject from 'moment'
import moment from 'moment'

const hydrateMoment = (data: string | void | null): MomentObject | null => {
  return data ? moment(data) : null
}

export default hydrateMoment