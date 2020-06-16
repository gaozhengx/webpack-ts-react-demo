import actionTypes from '../actions/actionTypes'

interface Iactions {
    type: string,
    value?: any,
}

export interface Istate {
    isLoading: boolean,
    isLogin: boolean
}

const initState: Istate = {
    isLoading: false,
    isLogin: false,
}


const mainReducer = (state = initState, action: Iactions): Istate => {
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