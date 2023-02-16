import React, { useState, useEffect, useRef } from 'react'
import { useLocation, useHistory } from 'react-router-dom'

import useLogin from '@/hooks/useLogin'
import {
    touchAdmin,
    touchClose,
    touchHome,
    touchQuit
} from '@/static/img'
import { ROUTERS } from '@/routers/mainRouter'

import RCLoading from '../loading'

import { NavBarContainer, Navs } from './style'

const NavBar = () => {
    const navlistRef = useRef(null)
    const location = useLocation()
    const { pending, doLogout } = useLogin()
    const [currentUser, setCurrentUser] = useState('用户')
    const history = useHistory()

    useEffect(() => {
        const auth = sessionStorage.getItem('auth')
        if (auth) {
            setCurrentUser(
                JSON.parse(auth)?.user_name
            )
        }
    }, [])

    const handleLogout = () => {
        doLogout()
    }

    const jumpToHomePage = () => {
        history.push({
            pathname: ROUTERS.首页.path
        })
    }

    const handleClose = () => {
        if (window) {
            window.close()
        }
    }

    return (
        <NavBarContainer>
            {pending && <RCLoading />}
            <div className="navs-container">
                导航栏
            </div>

            <div className="menus">
                <div className="menu" onClick={jumpToHomePage}>
                    <img src={touchHome} alt="首页icon" />
                    <span>首页</span>
                </div>
                <div className="menu">
                    <img src={touchAdmin} alt="user icon" />
                    <span>{currentUser}</span>
                </div>
                <div className="menu" onClick={handleLogout}>
                    <img src={touchQuit} alt="用户icon" />
                    <span>退出</span>
                </div>
                <div className="menu" onClick={handleClose}>
                    <img src={touchClose} alt="用户icon" />
                    <span>关闭系统</span>
                </div>
            </div>
        </NavBarContainer>
    )
}

export default NavBar
