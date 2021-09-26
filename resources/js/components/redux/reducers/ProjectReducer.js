import {CREATE_PROJECT, CREATE_PROJECT_ERROR, GET_ALL_PROJECT,
    SINGLE_PRODUCT, SINGLE_PRODUCT_ERROR} from "../types"


const get_product = (products, id) => {
    return
}

const intialState = {
    projects: [],
    project: null,
    next: null,
    prev: null,
    loading: true,
    message: null
}

export default (state = intialState, action) => {
    switch (action.type) {
        case CREATE_PROJECT:
            return {
                ...state,
                projects: [ ...state.projects, action.payload],
                message: "Successful",
                loading: false
            }
        case GET_ALL_PROJECT:
            return {
                ...state,
                projects: [...state.projects, ...action.payload.data],
                next: action.payload.next_page_url,
                prev: action.payload.prev_page_url,
                loading: false
            }
        case SINGLE_PRODUCT:
            return {
                ...state,
                project: "wait",
                loading: false
            }
        case CREATE_PROJECT_ERROR:
            return {
                ...state,
                message: "Something Happened!",
                loading: false
            }
        default:
            return state
    }
}
