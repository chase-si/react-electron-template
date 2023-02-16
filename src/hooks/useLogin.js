import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { UPDATE_LOGIN_STATUS } from '../redux/constants/global'
import { postToLogin, postToLogout } from '../utils/services'

// 模拟请求
const mockRequest = () => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res('请求成功!')
        }, 1000)
    })
}

const useLogin = () => {
    const [pending, setPending] = useState(false)
    const history = useHistory()
    const dispatch = useDispatch()

    const doLogin = async (params) => {
        setPending(true)
        try {
            // const res = await postToLogin(params)
            const res = await mockRequest(params)
            if (res) {
                sessionStorage.setItem(
                    'auth',
                    JSON.stringify(params)
                )
                dispatch({
                    type: UPDATE_LOGIN_STATUS,
                    param: params.user_name
                })
                history.push('/')
            }
            setPending(false)
        } catch (err) {
            setPending(false)
            throw (err)
        }
    }

    const doLogout = async (newPsd) => {
        setPending(true)
        try {
            const params = JSON.parse(
                sessionStorage.getItem('auth')
            )
            // const res = await postToLogout({
            //     ...params,
            //     password: newPsd || params.password
            // })
            const res = await mockRequest(params)
            if (res) {
                sessionStorage.removeItem('auth')
                history.push('/login')
                dispatch({
                    type: UPDATE_LOGIN_STATUS,
                    param: null
                })
            }
            setPending(false)
        } catch (err) {
            setPending(false)
            throw (err)
        }
    }

    return {
        doLogin, pending, doLogout
    }
}

export default useLogin
