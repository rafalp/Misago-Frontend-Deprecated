import getBasename from '../getBasename'

jest.mock('misago/constants', () => {
  return { url: { index: '/forum/' } } }
})

test('getBasename() returns  basename with leading slash but no trailing slash', () => {
  expect(getBasename()).toBe('/forum')
})