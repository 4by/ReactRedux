import { ADD_CUSTOMER, REMOVE_CUSTOMERS, ADD_MANY_CUSTOMERS } from './customerConsts'


export const addCustomerAction = payload => ({ type: ADD_CUSTOMER, payload })
export const removeCustomerAction = payload => ({ type: REMOVE_CUSTOMERS, payload })
export const addManyCustomersAction = payload => ({ type: ADD_MANY_CUSTOMERS, payload })
