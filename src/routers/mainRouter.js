import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'

import NavBar from '../components/navbar'
import Home from '../pages/home'

export const ROUTERS = {
    首页: {
        path: '/',
        title: '便携式频谱传感器管理终端软件',
        component: Home
    }
}

export const MainRouter = () => (
    <>
        <NavBar />
        <Switch>
            {Object.entries(ROUTERS)
                .map(([routerName, routerVal]) => {
                    return !routerVal.children ? (
                        <Route
                            key={routerName}
                            path={routerVal.path}
                            exact={routerVal.path === '/'}
                            render={props => <routerVal.component {...props} />}
                        />
                    ) : (
                        Object.entries(routerVal.children)
                            .map(([childName, childVal]) => (
                                <Route
                                    key={childName}
                                    strict
                                    path={childVal.path}
                                    render={props => <childVal.component {...props} />}
                                />
                            ))
                    )
                })}
        </Switch>
    </>
)
