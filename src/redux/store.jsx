import { createStore, applyMiddleware } from 'redux'
// import { composeWithDevTools } from 'redux-devtools-extension'
// import logger from 'redux-logger'
// import thunk from 'redux-thunk'
import HandlersUnion from './handlersUnion'

export default createStore(HandlersUnion,
  //  (applyMiddleware(logger, thunk)
   )
