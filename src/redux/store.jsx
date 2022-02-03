import {createStore, combineReducers, applyMiddleware} from "redux";
import {cashReducer} from "./cash/cashReducer";
import {customerReducer} from './customer/customerReducer'
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    cashState: cashReducer,
    customerState: customerReducer
})

export default createStore(rootReducer, applyMiddleware(thunk));
