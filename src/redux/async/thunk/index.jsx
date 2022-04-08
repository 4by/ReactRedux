import { createStore, combineReducers, applyMiddleware } from "redux";
import userReducer from '../users/userReducer'
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    thunkState: userReducer
})

export default createStore(rootReducer, applyMiddleware(thunk));
