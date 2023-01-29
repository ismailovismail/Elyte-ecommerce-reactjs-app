import { combineReducers } from "redux";
import { createStore } from "redux";
import { compose } from "redux";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import blogReducer from "../reducer/blogReducer";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const configureStore=()=>{
    const store=createStore(
        combineReducers({
            blog:blogReducer
        }),

        composeEnhancers(applyMiddleware(thunk))
    )
    return store
}

export default configureStore