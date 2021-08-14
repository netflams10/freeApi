import {REGISTER_USER, REGISTER_FAIL, SET_LOADING} from "../types";
import post from "../../helpers/postAttribute";
import axios from "axios";
import _ from "lodash";




export const setLoading = () => ({
    type: SET_LOADING
})

export const registerUser = (body) => async dispatch => {

    try {
        setLoading();
        const show = _.pick(body, ['first_name', "last_name", "username", "email", "password"]);

        if (body.password === body.confirm_password) {
            console.log(show);
            const res = await axios.post("/api/registerUser", {
                methos: "post",
                body: show,
            })
            const data = res.json();

            dispatch({
                type: REGISTER_USER,
                payload: data
            })
        }
    } catch (err) {
        console.error(err);
        dispatch({
            type:REGISTER_FAIL,
            payload: "error"
        })
    }
    // try {
    //     const res = await axios.post('/api/registerUser', post.post);
    //     const data = res.json()

    //     dispatch({
    //         type: REGISTER_USER,
    //         payload: data
    //     })
    // } catch (err) {
    //     dispatch({
    //         type: REGISTER_FAIL,
    //         payload(err)
    //     })
    // }
}