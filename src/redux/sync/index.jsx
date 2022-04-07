import {createStore, combineReducers} from "redux";
import {cashReducer} from "./cash/cashReducer";
import {customerReducer} from './customer/customerReducer'

const rootReducer = combineReducers({
    cashState: cashReducer,
    customerState: customerReducer,
})

export default createStore(rootReducer);
