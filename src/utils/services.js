import { axios } from './request'

// 登录
export const postToLogin = async (params) => {
    return axios({
        url: '/auth/login',
        method: 'post',
        data: params
    })
}

// 退出
export const postToLogout = async (params) => {
    return axios({
        url: '/auth/logout',
        method: 'post',
        data: params
    })
}
