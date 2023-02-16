import React, { useState } from 'react'

import RCLoading from '@/components/loading'
import useLogin from '@/hooks/useLogin'

import { LoginContainer, InputContainer } from './style'
import { INIT_VALUES } from './constants'

// 登录页
const Login = () => {
    const [param, setParam] = useState({ ...INIT_VALUES })
    const [focusItem, setFocusItem] = useState(null)
    const { pending, doLogin } = useLogin()

    const handleOnChange = e => {
        setParam({
            ...param,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = () => {
        doLogin(param)
    }

    const handleKeyPress = e => {
        if (e.key === 'Enter') {
            handleSubmit()
        }
    }

    const handleFocus = e => {
        setFocusItem(e.target.name)
    }

    const handleBlur = () => {
        setFocusItem(null)
    }

    const handleCancel = () => {
        setParam({ ...INIT_VALUES })
    }

    return (
        <LoginContainer>
            {pending && <RCLoading />}
            <div className="title" />
            <div className="form">
                <div className="globe" />
                <InputContainer focus={focusItem === 'user_name'}>
                    <div className="img" />
                    <div className="input">
                        <input
                            type="text"
                            placeholder="用户名"
                            name="user_name"
                            value={param.user_name}
                            onChange={handleOnChange}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                        />
                    </div>
                </InputContainer>

                <InputContainer focus={focusItem === 'password'}>
                    <div className="img" />
                    <div className="input">
                        <input
                            placeholder="密   码"
                            name="password"
                            type="password"
                            value={param.password}
                            onChange={handleOnChange}
                            onKeyPress={handleKeyPress}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                        />
                    </div>
                </InputContainer>

                <div className="button">
                    <button type="button" onClick={handleSubmit}>
                        登录
                    </button>
                    <button type="button" onClick={handleCancel}>
                        重置
                    </button>
                </div>
            </div>
        </LoginContainer>
    )
}

export default Login
