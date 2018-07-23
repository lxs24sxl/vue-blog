import axios from 'axios'
import Config from './config'

const service =  axios.create({
	baseURL: Config.baseURL,
	timeout: 15000
})

service.interceptors.request.use( config => {
	return config
}, error => {
	Promise.reject(error)
})


service.interceptors.response.use( response => {
	// const res = response.data
	// const code = res.code
	
	return res
}, error => {
	return Promise.reject( error )
})

export default service