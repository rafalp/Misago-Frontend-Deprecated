// @flow
import { api, auth, conf, url } from './constants'

const flowTest = (value: string) => {
  console.log(value)
}

const sayMeow = () => {
  flowTest(auth)
  flowTest(api)
  flowTest(url)
  flowTest(conf)
}

export default sayMeow