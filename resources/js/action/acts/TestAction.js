import { REGISTER_USER, SET_LOADING } from "../types";





export const registerUser = (data) => async dispatch => {
    setLoading();
    try {
    }
}

export const getSomething = () => {
    return async dispatch => {
        setLoading();

        dispatch({
            type: GetItem,
            payload: true
        })
    }
}

export const getLogs = () => async dispatach => {
    try {
        setLoading();
        const res = "Hello sire";

        const result = await res.json()

        dispatch({
            type: GetItem,
            payload: true
        })
    } catch (err) {
        console.log(err);
    }
}
