// @flow
import { url } from 'misago/constants'

const getBasename = (): string => {
  if (url.index === '/') return url.index
  return url.index.substring(0, url.index.length - 1)
}

export default getBasename