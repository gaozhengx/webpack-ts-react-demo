import actionTypes from './actionTypes'

// 使用定时器模拟ajax请求
export const login = () => {
    return (dispatch: Function) => {
        dispatch(toggleSpinner());
        setTimeout(() => {
            dispatch({ type: actionTypes.LOGINSUCCESS });
            dispatch(toggleSpinner());
        }, 1000)
    }
}
export const logout = () => {
    return (dispatch: Function) => {
        dispatch(toggleSpinner());
        setTimeout(() => {
            dispatch({ type: actionTypes.LOGINFAILURE });
            dispatch(toggleSpinner());
        }, 1000);
    }
}

export const toggleSpinner = () => ({
    type: actionTypes.TOGGLESPIN
})