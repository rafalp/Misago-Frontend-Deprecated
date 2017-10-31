import moment from 'moment'
import normalizeMoment from '../normalizeMoment'

test('normalizeMoment() returns moment object for string', () => {
  const input = '2013-03-09T22:50:08Z'
  expect(normalizeMoment(input).isSame(moment(input))).toBe(true)
})

test('normalizeMoment() returns null for null', () => {
  expect(normalizeMoment(null)).toBe(null)
})

test('normalizeMoment() returns null for undefined', () => {
  expect(normalizeMoment(undefined)).toBe(null)
  expect(normalizeMoment()).toBe(null)
})