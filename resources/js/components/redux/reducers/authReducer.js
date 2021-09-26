import {
    REGISTER_USER, REGISTER_FAIL, LOGIN_FAIL, LOGIN_USER, LOAD_USER, LOAD_USER_FAIL
} from "../types"

const initialState = {
    loading: true,
    message: null,
    isAuthenticated: null,
    token: localStorage.getItem('token'),
    user: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_USER:
            localStorage.setItem('token', action.payload.access_token)
            return {
                ...state,
                message: null,
                loading: false,
                isAuthenticated: true,
                token: action.payload.access_token
            }
        case LOAD_USER:
            return {
                ...state,
                message: null,
                user: action.payload,
                isAuthenticated: true,
                loading: false
            }
        case REGISTER_USER:
            return {
                ...state,
                message: action.payload,
                loading: false,
                isAuthenticated: null
            }
        case REGISTER_FAIL:
        case LOGIN_FAIL:
        case LOAD_USER_FAIL:
            if (localStorage.getItem('token')) {
                localStorage.removeItem('token')
            }
            return {
                ...state,
                loading:false,
                message: action.payload,
                isAuthenticated: null,
                user: null
            }
        default:
            return state;
    }
}
