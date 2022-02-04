import { createStore, combineReducers, applyMiddleware } from "redux";
import { asyncReducer } from './user/asyncReducer'
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    asyncState: asyncReducer
})

// посколько асинхонно-приходящие данные нельзя вернуть из фунции:
// c помощью thunk можно делать dispatch в стейт не обьектов, а функций,
// принимающих аргументом саму фунцию dispatch
export default createStore(rootReducer, applyMiddleware(thunk));
