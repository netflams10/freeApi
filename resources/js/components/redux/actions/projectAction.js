import axios from 'axios'
import setAuthToken from "../../utils/setAuthToken";



import {    CREATE_PROJECT, CREATE_PROJECT_ERROR, GET_ALL_PROJECT, GET_ALL_PROJECT_ERROR,
    SINGLE_PRODUCT, SINGLE_PRODUCT_ERROR
} from "../types"


if (localStorage.getItem('token')) {
    setAuthToken(localStorage.getItem('token'))
}

export const get_all_project = url => async dispatch => {

    try {
        const res = await axios.get(url === "" ? '' : "api/project")

        dispatch({
            type: GET_ALL_PROJECT,
            payload: res.data
        })
    } catch (err) {
        console.log(err)
        dispatch({
            type: GET_ALL_PROJECT_ERROR,
            payload: err.message
        })
    }
}

export const create_project = formData => async dispatch => {

    try {
        const res = await axios.post('api/project/create', formData);

        dispatch({
            type: CREATE_PROJECT,
            payload: res.data
        })
    } catch (err) {
        dispatch({
            type: CREATE_PROJECT_ERROR,
            payload: "Please check the Entered Info"
        })
    }
}

export const single_project = id => async dispatch => {
    console.log(id);
    try {
        const res = await axios.get(`api/project/` + id)
        console.log(res.data)

        dispatch({
            type:SINGLE_PRODUCT,
            payload: id
        })
    } catch (err) {
        console.log(err)
        dispatch({
            type: SINGLE_PRODUCT_ERROR,
            payload: err.message
        })
    }
}

