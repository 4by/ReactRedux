import { createStore, combineReducers, applyMiddleware } from "redux";
import asyncReducer from './user/asyncReducer'
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    asyncState: asyncReducer
})

export default createStore(rootReducer, applyMiddleware(thunk));
