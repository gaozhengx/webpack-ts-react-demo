import React, { Component } from 'react'
import { Button } from 'antd'
import './index.scss'
import { connect } from 'react-redux'
import { login } from '../../actions/actionCreators'
import { Redirect } from 'react-router-dom'
import { storeState } from '../../store'

class Login extends Component<any, storeState> {

    render() {

        const { login, isLogin } = this.props;

        if (isLogin) {
            return <Redirect to='/' />
        } else {
            return (
                <Button
                    type="primary"
                    className="login-btn"
                    size='large'
                    onClick={login}
                >
                    点击登录
                </Button>
            )
        }

    }
}

const mapStateToProps = (state: storeState) => ({
    isLogin: state.mainReducer.isLogin
})

export default connect(mapStateToProps, { login })(Login);