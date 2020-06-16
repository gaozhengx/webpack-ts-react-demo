
import React, { Component } from 'react';
import { Spin } from 'antd'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { Home, Login } from './pages';
import { connect } from 'react-redux';
import { storeState } from './store';


class App extends Component<any, any> {
    render() {
        const { isLogin, isLoading } = this.props;
        return (
            <Spin spinning={isLoading}>
                <BrowserRouter>
                    <Switch>
                        <Route
                            path='/'
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

const mapStateToProps = (state: storeState) => ({
    isLogin: state.mainReducer.isLogin,
    isLoading: state.mainReducer.isLoading,
})

export default connect(mapStateToProps, null)(App);