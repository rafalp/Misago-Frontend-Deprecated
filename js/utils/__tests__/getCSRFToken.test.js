import getCSRFToken from '../getCSRFToken'

jest.mock('misago/constants', () => {
  return { conf: { csrf_cookie_name: 'csrftoken' } }
})

test('getCSRFToken() returns null when no cookies exist', () => {
  expect(getCSRFToken()).toBe(null)
})

test('getCSRFToken() returns null when csrf cookie is unset', () => {
  document.cookie = 'lorem=ipsum'
  expect(getCSRFToken()).toBe(null)
})

test('getCSRFToken() returns csrf token when cookie is set', () => {
  document.cookie = 'lorem=ipsum'
  document.cookie = 'csrftoken=c5rf'
  expect(getCSRFToken()).toBe('c5rf')
})