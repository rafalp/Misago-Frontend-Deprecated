import * as validators from '../validators'

test('isEmail() validator works with default message', () => {
  const error = 'Enter a valid email address.'
  const validator = validators.isEmail()

  expect(validator('lorem')).toBe(error)
  expect(validator('0')).toBe(error)

  expect(validator()).toEqual(false)
  expect(validator('')).toEqual(false)
  expect(validator('lorem@ipsum.com')).toEqual(false)
  expect(validator('łórem@ipsum.com')).toEqual(false)
})

test('isEmail() validator works with custom message', () => {
  const error = 'Enter a right and correct email address!'
  const validator = validators.isEmail(error)

  expect(validator('lorem')).toBe(error)
  expect(validator('0')).toBe(error)
})

test('isRequired() validator works with default message', () => {
  const error = 'This field is required.'
  const validator = validators.isRequired()

  expect(validator()).toBe(error)
  expect(validator(null)).toBe(error)
  expect(validator('')).toBe(error)
  expect(validator(' ')).toBe(error)
  expect(validator([])).toBe(error)

  expect(validator('hello')).toEqual(false)
  expect(validator(0)).toEqual(false)
  expect(validator(12)).toEqual(false)
})

test('isRequired() validator works with custom message', () => {
  const error = 'This field hazzz to be entered.'
  const validator = validators.isRequired(error)

  expect(validator()).toBe(error)
  expect(validator(null)).toBe(error)
  expect(validator('')).toBe(error)
  expect(validator(' ')).toBe(error)
  expect(validator([])).toBe(error)
})

test('maxLength() validator works with default message', () => {
  const error = 'Ensure this value has at most 4 characters'
  const validator = validators.maxLength(4)

  expect(validator('12345678')).toBe(error + ' (it has 8).')
  expect(validator('123458')).toBe(error + ' (it has 6).')
  expect(validator([1, 2, 3, 4, 5, 6, 7])).toBe(error + ' (it has 7).')

  expect(validator()).toEqual(false)
  expect(validator('')).toEqual(false)
  expect(validator([])).toEqual(false)
  expect(validator('123')).toEqual(false)
  expect(validator('1234')).toEqual(false)
})

test('maxLength() validator works with custom message', () => {
  const error = 'Haz at most 4 characters!'
  const validator = validators.maxLength(4, (limit) => {
    return ngettext(
      'Haz at most %(limit_value)s character!',
      'Haz at most %(limit_value)s characters!',
      limit
    )
  })

  expect(validator('12345678')).toBe(error)
  expect(validator('123458')).toBe(error)
  expect(validator([1, 2, 3, 4, 5, 6, 7])).toBe(error)
})

test('minLength() validator works with default message', () => {
  const error = 'Ensure this value has at least 4 characters'
  const validator = validators.minLength(4)

  expect(validator('1')).toBe(error + ' (it has 1).')
  expect(validator('12')).toBe(error + ' (it has 2).')
  expect(validator([1, 2, 3])).toBe(error + ' (it has 3).')

  expect(validator()).toEqual(false)
  expect(validator('')).toEqual(false)
  expect(validator([])).toEqual(false)
  expect(validator('1234')).toEqual(false)
  expect(validator('12345')).toEqual(false)
})

test('minLength() validator works with custom message', () => {
  const error = 'Haz at least 4 characters!'
  const validator = validators.minLength(4, (limit) => {
    return ngettext(
      'Haz at least %(limit_value)s character!',
      'Haz at least %(limit_value)s characters!',
      limit
    )
  })

  expect(validator('1')).toBe(error)
  expect(validator('12')).toBe(error)
  expect(validator([1, 2, 3])).toBe(error)
})

test('maxValue() validator works with default message', () => {
  const error = 'Ensure this value is less than or equal to 4.'
  const validator = validators.maxValue(4)

  expect(validator(5)).toBe(error)

  expect(validator()).toEqual(false)
  expect(validator(3)).toEqual(false)
  expect(validator(4)).toEqual(false)
})

test('maxValue() validator works with custom message', () => {
  const error = 'Ensure this value iz zmallerz dat 4.'
  const validator = validators.maxValue(4, gettext('Ensure this value iz zmallerz dat %(limit_value)s.'))

  expect(validator(5)).toBe(error)
})

test('minValue() validator works with default message', () => {
  const error = 'Ensure this value is greater than or equal to 4.'
  const validator = validators.minValue(4)

  expect(validator(3)).toBe(error)

  expect(validator()).toEqual(false)
  expect(validator(4)).toEqual(false)
  expect(validator(5)).toEqual(false)
})

test('minValue() validator works with custom message', () => {
  const error = 'Ensure this value iz greatezz dat 4.'
  const validator = validators.minValue(4, gettext('Ensure this value iz greatezz dat %(limit_value)s.'))

  expect(validator(3)).toBe(error)
})

test('validateValue() returns empty errors list if field has no validators', () => {
  expect(validators.validateValue('ok!', null)).toEqual([])
})

test('validateValue() returns empty errors list if field validators are undefined', () => {
  expect(validators.validateValue('ok!')).toEqual([])
})

test('validateValue() returns errors for invalid value', () => {
  const value = 'ok!'
  const errors = validators.validateValue(value, [
    validators.isRequired(),
    validators.minLength(5),
    validators.isEmail()
  ])

  expect(errors).toEqual([
    'Ensure this value has at least 5 characters (it has 3).',
    'Enter a valid email address.'
  ])
})

test('validateValue() validates value', () => {
  const value = 'lorem@ipsum.com'
  const errors = validators.validateValue(value, [
    validators.isRequired(),
    validators.minLength(5),
    validators.isEmail()
  ])

  expect(errors).toEqual([])
})

test('validateValues() returns empty errors list if has no data or validators', () => {
  expect(validators.validateValues(null, null)).toEqual({})
  expect(validators.validateValues({}, {})).toEqual({})
})

test('validateValues() returns no errors for valid data', () => {
  const data = {
    username: 'bobboberson',
    email: 'lorem@ipsum.com'
  }
  const errors = validators.validateValues(data, {
    username: [
      validators.isRequired()
    ],
    email: [
      validators.isRequired(),
      validators.minLength(5),
      validators.isEmail()
    ]
  })

  expect(errors).toEqual({ username: [], email: [] })
})

test('validateValues() returns errors for invalid data', () => {
  const data = {
    username: 'bobboberson',
    email: 'loremipsum.com'
  }
  const errors = validators.validateValues(data, {
    username: [
      validators.isRequired()
    ],
    email: [
      validators.isRequired(),
      validators.minLength(5),
      validators.isEmail()
    ]
  })

  expect(errors).toEqual({ username: [], email: ['Enter a valid email address.'] })
})

test('flattenErrors() flattens errors map to single list', () => {
  const errors = {
    username: [],
    email: ['Enter a valid email address.']
  }

  expect(validators.flattenErrors(errors)).toEqual(['Enter a valid email address.'])
})