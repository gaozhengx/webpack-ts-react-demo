
import React, { Component } from 'react';
import { Spin } from 'antd'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { Home, Login } from './pages';
import { connect } from 'react-redux'
class App extends Component {
    render() {
        const { isLogin, isLoading } = this.props;
        return (
            <Spin spinning={isLoading}>
                <BrowserRouter>
                    <Switch>
                        <Route
                            path='/'
                            // component={Home}
                            exact
                            render={(route) => {
                                return isLogin ? <Home {...route} /> : <Redirect to='/login' />
                            }}
                        />
                        <Route path='/login' component={Login} />
                        <Route render={() => <h1>404</h1>} />
                    </Switch>
                </BrowserRouter>
            </Spin>
        )
    }
}

const mapStateToProps = state => ({
    isLogin: state.mainReducer.isLogin,
    isLoading: state.mainReducer.isLoading,
})

export default connect(mapStateToProps, null)(App);