import {createStore, combineReducers, applyMiddleware} from "redux";
import {cashReducer} from "./async/cashReducer";
import {customerReducer} from './async/customerReducer'
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    cashState: cashReducer,
    customerState: customerReducer
})

export default createStore(rootReducer, applyMiddleware(thunk));
