import actionTypes from '../actions/actionTypes'

export const login = () => {
    return dispatch => {
        dispatch(toggleSpinner());
        setTimeout(() => {
            dispatch({ type: actionTypes.LOGINSUCCESS });
            dispatch(toggleSpinner());
        }, 1000)
    }
}
export const logout = () => {
    return dispatch => {
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