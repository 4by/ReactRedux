import CUST_CONSTS from './customerConsts'

export const addCustomerAction = payload => ({ type: CUST_CONSTS.ADD_CUSTOMER, payload })
export const removeCustomerAction = payload => ({ type: CUST_CONSTS.REMOVE_CUSTOMERS, payload })
