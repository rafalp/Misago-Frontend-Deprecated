import axios from 'axios'
import getCSRFToken from './getCSRFToken'

const request = (url, ops) => {
  return axios(Object.assign({
    headers: {
      'X-Requested-With': 'XMLHttpRequest',
      'X-CSRFToken': getCSRFToken()
    },
    timeout: 15000,
    url: url
  }, ops))
}

const get = (url, params) => {
  return request(url, {
    method: 'GET',
    params: params || null
  })
}

const post = (url, data) => {
  return request(url, {
    method: 'POST',
    data: data || null
  })
}

const patch = (url, data) => {
  return request(url, {
    method: 'PATCH',
    data: data || null
  })
}

const put = (url, data) => {
  return request(url, {
    method: 'PUT',
    data: data || null
  })
}

const _delete = (url, data) => {
  return request(url, {
    method: 'DELETE',
    data: data || null
  })
}

const upload = (url, data, onProgress) => {
  return request(url, {
    method: 'POST',
    data: data || null
  })
}

export default {
  delete: _delete,
  get,
  post,
  patch,
  put,
  upload
}