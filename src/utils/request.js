/**
 * 公共request方法
 */
import axios from 'axios'

const Service = axios.create({
  baseURL: process.env.BASE_API || '',
  timeout: 15000
})

//请求拦截
Service.interceptors.request.use(
  config => {
  // 预留的token和token流水号位置
}, error => {  
})


// 响应拦截
Service.interceptors.response.use(
  response => {
    const res = response.data
    if (response.config && response.config.responseType === 'blob') {
      return res // 用于下载导出
    }
    if (res.code !== 0) {      
      // Message.error(res.message)
      // 505无效，返回登录页        
      if (res.code === 505 || res.code === 504) {
        window.location.href = '/'
      }
      return Promise.reject(res)
    }
    return res
  },
  error => {
    try {
      if (error.response.data.code === 505 || error.response.data.code === 504) {
        // Message.error('登录过期，请重新登录')
        setTimeout(() => {
          window.location.href = '/'
        }, 2000)
      } else {
        // Message.error(error.response.data.message)
        return Promise.reject(error.response)
      }  
    } catch (err) {
      console.log(error)
    }  
  }
)

export default Service

