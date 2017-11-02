// @flow
const interpolate = (fmt: string, obj: { [string]: string | number }): string => {
  return window.interpolate(fmt, obj, true)
}

export default interpolate