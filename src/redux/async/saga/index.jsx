import {applyMiddleware, combineReducers, createStore} from "redux";
import userReducer from "../users/userReducer";
import createSagaMiddleware from 'redux-saga'
import {rootWatcher} from "./combineSaga";

const rootReducer = combineReducers({
    sagaState: userReducer
})

const sagaMiddleware = createSagaMiddleware()

export default createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootWatcher)

