import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { ROUTERS } from '@/routers/mainRouter'

import { HomepageContainer } from './style'

const Home = () => {
    const { loginUser } = useSelector(state => state.global)
    console.log(loginUser)

    return (
        <HomepageContainer>
            <div className="bg-container">
                <div className="left-icons">
                    <div className="icon-row">
                        <Link to={ROUTERS.首页.path} className="icon-perceptionwx">
                            感知网系组织
                        </Link>
                        <Link to={ROUTERS.首页.path} className="icon-perceptionwx">
                            监测力量掌控
                        </Link>
                        <Link to={ROUTERS.首页.path} className="icon-monitorll">
                            监测力量掌控
                        </Link>
                    </div>
                    <div className="icon-row">
                        <Link to={ROUTERS.首页.path} className="icon-facilitykz">
                            设备实时控制
                        </Link>
                        <Link to={ROUTERS.首页.path} className="icon-datatj">
                            数据统计分析
                        </Link>
                        <Link to={ROUTERS.首页.path} className="icon-systemgl">
                            系统综合管理
                        </Link>
                    </div>
                </div>
                <div className="right-icons">
                    <div className="entrance">
                        快速入口
                    </div>
                    <Link to={ROUTERS.首页.path}>
                        <div className="icon">
                            <div className="button icon-gzwx" />
                            <div className="chassis">
                                感知网系快速构建
                            </div>
                        </div>
                    </Link>
                    <Link to={ROUTERS.首页.path}>
                        <div className="icon">
                            <div className="button icon-gzrw" />
                            <div className="chassis">
                                电磁信号快速定位
                            </div>
                        </div>
                    </Link>
                    <Link to={ROUTERS.首页.path}>
                        <div className="icon">
                            <div className="button icon-dchj" />
                            <div className="chassis">
                                电磁环境区域分析
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </HomepageContainer>
    )
}

export default Home
