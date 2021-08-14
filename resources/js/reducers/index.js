import { combineReducers } from "redux";
import testReducer from "./TestReducer";
import AuthReducer from "./AuthReducer";

export default combineReducers ({
    test: testReducer,
    auth: AuthReducer
})
