import moment from 'moment'
import hydrateMoment from '../hydrateMoment'

test('hydrateMoment() returns moment object for string', () => {
  const input = '2013-03-09T22:50:08Z'
  expect(hydrateMoment(input).isSame(moment(input))).toBe(true)
})

test('hydrateMoment() returns null for null', () => {
  expect(hydrateMoment(null)).toBe(null)
})

test('hydrateMoment() returns null for undefined', () => {
  expect(hydrateMoment(undefined)).toBe(null)
  expect(hydrateMoment()).toBe(null)
})