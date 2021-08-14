import { Test_Logs } from "../action/types";





const initialState = {
    logs: null,
    loading: false,
    error: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case Test_Logs:
            return {
                ...state,
                loading: true
            }
        default:
            return state;
    }
}
