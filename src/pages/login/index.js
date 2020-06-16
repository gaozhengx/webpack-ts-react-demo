import React, { Component } from 'react'
import { Button } from 'antd'
import './index.scss'
import { connect } from 'react-redux'
import { login } from '../../actions'
import { Redirect } from 'react-router-dom'
class Login extends Component {

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

const mapStateToProps = state => ({
    isLogin: state.mainReducer.isLogin
})

export default connect(mapStateToProps, { login })(Login);