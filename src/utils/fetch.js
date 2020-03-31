import axios from 'axios'
import config from './config'
console.log('config', config)

const service = axios.create({
  baseURL: config.BASE_URL,
  timeout: 15000
})

service.interceptors.request.use(config => {
  return config
}, error => {
  Promise.reject(error)
})


service.interceptors.response.use(response => {
  // const res = response.data
  // const code = res.code

  return res
}, error => {
  return Promise.reject(error)
})

export default service
