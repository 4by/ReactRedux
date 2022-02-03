import { ADD_CASH, GET_CASH } from './cashConsts'


export const addCashAction = payload => ({ type: ADD_CASH, payload })
export const getCashAction = payload => ({ type: GET_CASH, payload })