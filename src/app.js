
import React, { Component } from 'react'
import { BrowserRouter, HashRouter, Route, Switch, Redirect } from 'react-router-dom'
import { Home, Login } from './pages'
const isLogin = true;
export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path='/login' component={Login} />
                    <Route
                        path="/"
                        render={(routerProps) => {
                            return isLogin ? <Home {...routerProps} /> : <Redirect to='/login' />
                        }}
                        exact
                    />
                </Switch>
            </BrowserRouter>
        )
    }
}
