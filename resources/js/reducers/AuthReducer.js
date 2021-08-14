import {REGISTER_USER, REGISTER_FAIL, SET_LOADING} from "../action/types"






const initialState = {
    loading: false,
    message: null
}

export default (state = initialState, action) => {
    console.log(action)
    switch (action.type) {
        case REGISTER_USER:
            return {
                ...state,
                message: action.payload
            }
        case SET_LOADING:
            return {
                ...state,
                loading: true
            }
        default:
            return state;
    }
}