import { ADD_CUSTOMER, ADD_MANY_CUSTOMERS, REMOVE_CUSTOMERS, ADD_CASH, GET_CASH } from './asyncConsts'

export const addCashAction = number => ({ type: ADD_CASH, payload: number })
export const getCashAction = number => ({ type: GET_CASH, payload: number })
export const addCustomerAction = payload => ({ type: ADD_CUSTOMER, payload })
export const addManyCustomersAction = payload => ({ type: ADD_MANY_CUSTOMERS, payload })
export const removeCustomerAction = payload => ({ type: REMOVE_CUSTOMERS, payload })