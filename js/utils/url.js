// @flow
import forOwn from 'lodash.forown'
import trim from 'lodash.trim'

const url = (basepath: string, segments: Array<string | number> | void | null, params: { [string]: string | number } | null | void): string => {
  let finalurl: string = basepath

  if (segments && segments.length) {
    const path = segments.map((i) => trim(i + '', '/'))
    finalurl += path.join('/') + '/'
  }

  if (params) {
    const querystring: Array<string> = []
    forOwn(params, (value: string | number, key: string) => {
      querystring.push(encodeURIComponent(key) + '=' + encodeURIComponent(value.toString()))
    })
    finalurl += '?' + querystring.join('&')
  }
  return finalurl
}

export default url