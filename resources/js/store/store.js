import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducers from "../reducers";


const initialState = {};

const middlesware = [thunk];

const store = createStore(
    rootReducers,
    initialState,
    composeWithDevTools(applyMiddleware(...middlesware))
);

export default store;
