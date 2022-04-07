import CUST_CONSTS from './customerConsts'


const defaultState = { customer: [] }

export const customerReducer = (state = defaultState, action) => {
    switch (action.type) {
        case CUST_CONSTS.ADD_CUSTOMER: return { ...state, customer: [...state.customer, action.payload] }
        case CUST_CONSTS.REMOVE_CUSTOMERS: return { ...state, customer: state.customer.filter(customer => customer.id !== action.payload) }
        default: return state;
    }
}



