import { ADD_CUSTOMER, REMOVE_CUSTOMERS } from './customerConsts'


const defaultState = { customer: [] }

export const customerReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_CUSTOMER: return { ...state, customer: [...state.customer, action.payload] }
        case REMOVE_CUSTOMERS: return { ...state, customer: state.customer.filter(customer => customer.id !== action.payload) }
        default: return state;
    }
}



