import { combineReducers } from "redux";
import AuthReducer from "./authReducer";
import ProjectReducer from "./ProjectReducer";




export default combineReducers ({
    auth: AuthReducer,
    project: ProjectReducer
})
