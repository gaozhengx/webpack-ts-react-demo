import actionTypes from '../actions/actionTypes'

const initState = {
    isLoading: false,
    isLogin: false,
}


const mainReducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.LOGINSUCCESS:
            return { ...state, isLogin: true };
        case actionTypes.LOGINFAILURE:
            return { ...state, isLogin: false };
        case actionTypes.TOGGLESPIN:
            return { ...state, isLoading: !state.isLoading }
        default:
            return state;
    }
}

export default mainReducer;