import axios from 'axios'
axios.defaults.baseURL = 'https://open.duyiedu.com'
axios.interceptors.request.use(function (config) {
  config.params = {
    appkey: '15240778756_1570078131117'
  }
  return config
}, function (error) {
  return Promise.reject(error)
})

export default axios
