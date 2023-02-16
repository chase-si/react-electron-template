import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom'
import { useSelector } from 'react-redux'

import { MainRouter } from './mainRouter'
import Login from '../pages/login'

const AppRouter = () => {
    const { loginUser } = useSelector(state => state.global)

    return (
        <Router>
            <Switch>
                <Route path="/login" exact component={Login} />
                {loginUser
                    ? <Route path="/" component={MainRouter} />
                    : <Redirect to="/login" />}
            </Switch>
        </Router>
    )
}

export default AppRouter
