import Axios from 'axios'
import { message } from 'antd'

const BASIC_URL = window.env ? window.env.REACT_APP_API_URL : process.env.REACT_APP_API_URL

const axios = Axios.create({
    baseURL: BASIC_URL,
    timeout: 1000 * 60 * 10,
    headers: {
        'Content-Type': 'application/json;charset=UTF-8'
    }
    // validateStatus: (status) => {
    //     return (status === 401) // 密码错误时
    //       || (status === 416) // 请求range超出数据范围
    //       || (status >= 200 && status < 300)
    // }
})
// 请求拦截
axios.interceptors.request.use(config => {
    return {
        ...config
    }
}, err => {
    console.log('inerceptors Err', err)
    message.error(err?.message || '请求出错了')
    return Promise.reject(err)
})

// 响应拦截
axios.interceptors.response.use(async (response) => {
    if (response.data?.code !== 0) { // 后端统一规定code不为0是错误
        message.error(response.data.msg)
        return Promise.reject(response.data.msg)
    }
    return response.data.data
}, err => {
    console.log('inerceptors Err', err)
    message.error(err?.message || '请求出错了')
    return Promise.reject(err)
})

export {
    axios
}
