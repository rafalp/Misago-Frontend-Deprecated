// @flow
import axios from 'axios'
import getCSRFToken from './getCSRFToken'

type OnProgress = (number) => void

const request = (url: string, ops: {}) => {
  return axios(Object.assign({
    headers: {
      'X-Requested-With': 'XMLHttpRequest',
      'X-CSRFToken': getCSRFToken()
    },
    timeout: 15000,
    url: url
  }, ops))
}

const get = (url: string, params: ?{}) => {
  return request(url, {
    method: 'GET',
    params: params || null
  })
}

const post = (url: string, data: ?{}) => {
  return request(url, {
    method: 'POST',
    data: data || null
  })
}

const patch = (url: string, data: []) => {
  return request(url, {
    method: 'PATCH',
    data: data || null
  })
}

const put = (url: string, data: ?{}) => {
  return request(url, {
    method: 'PUT',
    data: data || null
  })
}

const _delete = (url: string, data: ?{}) => {
  return request(url, {
    method: 'DELETE',
    data: data || null
  })
}

const upload = (url: string, data: {}, onProgress: OnProgress) => {
  return request(url, {
    method: 'POST',
    data: data
  })
}

export default {
  delete: _delete,
  get,
  post,
  patch,
  put,
  upload,
  request
}