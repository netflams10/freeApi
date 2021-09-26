import axios from "axios";
import setAuthToken from "../../utils/setAuthToken";
import {
    REGISTER_USER, REGISTER_FAIL, LOGIN_FAIL, LOGIN_USER, LOAD_USER_FAIL, LOAD_USER
} from "../types";


export const loadUser = () => async dispatch => {
    if (localStorage.getItem('token')) {
        setAuthToken(localStorage.getItem('token'))
    }

    try {
        const res = await axios.get('api/getuser')

        dispatch({
            type: LOAD_USER,
            payload: res.data
        })
    } catch (err) {
        dispatch({
            type: LOAD_USER_FAIL,
            payload: "Please Log In!"
        })
    }
}

export const registerUser = formData => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    try {
        const res = await axios.post('api/register-user', formData, config);

        dispatch({
            type: REGISTER_USER,
            payload: res.data.message
        })
    } catch (err) {
        dispatch({
            type: REGISTER_FAIL,
            payload: "Credential seems to exists!"
        })
    }
}

export const loginUser = formData => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    try {
        const res = await axios.post('api/login', formData, config)

        dispatch({
            type: LOGIN_USER,
            payload: res.data
        })
    } catch (err) {
        dispatch({
            type: LOGIN_FAIL,
            payload: "Invalid Credentials!"
        })
    }
}
