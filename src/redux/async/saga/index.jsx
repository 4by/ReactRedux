import {applyMiddleware, combineReducers, createStore} from "redux";
import userReducer from "./user/userReducer";
import createSagaMiddleware from 'redux-saga'
import {rootWatcher} from "./combineSaga";

const rootReducer = combineReducers({
    userReducer
})

const sagaMiddleware = createSagaMiddleware()

export default createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootWatcher)

