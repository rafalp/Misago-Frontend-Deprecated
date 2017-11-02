// @flow
import { conf } from 'misago/constants'

const getCSRFToken = (): string | null => {
  if (!document.cookie) return null
  if (document.cookie.indexOf(conf.csrf_cookie_name) === -1) return null

  const cookieRegex = new RegExp(conf.csrf_cookie_name + '\=([^;]*)')
  const cookie = document.cookie.match(cookieRegex)
  if (cookie && cookie[0]) return cookie[0].split('=')[1]
  return null
}

export default getCSRFToken