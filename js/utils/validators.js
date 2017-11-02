// @flow
import forOwn from 'lodash.forown'
import interpolate from './interpolate'

// eslint-disable-next-line no-useless-escape, semi
const emailRegex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+[^<>()\.,;:\s@\"]{2,})$/;

const isEmail = (message: ?string): mixed => {
  const error = message || gettext('Enter a valid email address.')

  return (value: ?string): string | false => {
    if (typeof value === 'undefined' || value === null) return false
    if (value.trim().length && !emailRegex.test(value)) return error
    return false
  }
}

const isRequired = (message: ?string): mixed => {
  const error = message || gettext('This field is required.')

  return (value: string | Array<mixed> | null | void): string | false => {
    if (typeof value === 'undefined' || value === null) return error
    if (typeof value === 'string' && value.trim().length === 0) return error
    if (value.length === 0) return error

    return false
  }
}

const maxLength = (limit: number, message: ?Function): mixed => {
  const error: Function = message || ((limit) => {
    return ngettext(
      'Ensure this value has at most %(limit_value)s character (it has %(show_value)s).',
      'Ensure this value has at most %(limit_value)s characters (it has %(show_value)s).',
      limit
    )
  })

  return (value: ?string | Array<mixed>): string | false => {
    if (typeof value === 'undefined' || value === null) return false
    if (typeof value.length === 'undefined') return false

    let length: number
    if (typeof value === 'string') {
      length = value.trim().length
    } else {
      length = value.length
    }

    if (length > limit) {
      return interpolate(error(limit), {
        limit_value: limit,
        show_value: length
      })
    }

    return false
  }
}

const minLength = (limit: number, message: ?Function): mixed => {
  const error: Function = message || ((limit) => {
    return ngettext(
      'Ensure this value has at least %(limit_value)s character (it has %(show_value)s).',
      'Ensure this value has at least %(limit_value)s characters (it has %(show_value)s).',
      limit
    )
  })

  return (value: ?string | Array<mixed>): string | false => {
    if (typeof value === 'undefined' || value === null) return false
    if (typeof value.length === 'undefined') return false

    let length: number
    if (typeof value === 'string') {
      length = value.trim().length
    } else {
      length = value.length
    }

    if (length && length < limit) {
      return interpolate(error(limit), {
        limit_value: limit,
        show_value: length
      })
    }

    return false
  }
}

const maxValue = (limit: number, message: ?string): mixed => {
  const error = message || gettext('Ensure this value is less than or equal to %(limit_value)s.')

  return (value: ?number): string | false => {
    if (typeof value === 'undefined' || value === null) return false
    if (value > limit) return interpolate(error, { limit_value: limit })

    return false
  }
}

const minValue = (limit: number, message: ?string): mixed => {
  const error = message || gettext('Ensure this value is greater than or equal to %(limit_value)s.')

  return (value: ?number): string | false => {
    if (typeof value === 'undefined' || value === null) return false
    if (value < limit) return interpolate(error, { limit_value: limit })

    return false
  }
}

const validateValue = (value: mixed, validators: Array<Function>): ValidationResult => {
  if (!validators) return []

  const errors: ValidationResult = []
  for (let i = 0; i < validators.length; i++) {
    const validator = validators[i]
    const error = validator(value)
    if (error) errors.push(error)
  }
  return errors
}

const validateValues = (values: { [string]: mixed }, validators: { [string]: Array<Function> }): CompositeValidationResult => {
  if (!values || !validators) return {}

  const errors: CompositeValidationResult = {}
  forOwn(validators, (fieldValidators: Array<Function>, fieldname: string) => {
    errors[fieldname] = validateValue(values[fieldname], fieldValidators)
  })
  return errors
}

const flattenErrors = (errors: { [string]: mixed }): Array<string> => {
  const flattened: ValidationResult = []
  forOwn(errors, (valueErrors: ValidationResult) => {
    valueErrors.forEach((e: string) => {
      flattened.push(e)
    })
  })
  return flattened
}

export {
  isEmail,
  isRequired,
  maxLength,
  minLength,
  maxValue,
  minValue,
  validateValue,
  validateValues,
  flattenErrors,
}