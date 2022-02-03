import {ADD_MANY_CUSTOMERS, ADD_CUSTOMER, REMOVE_CUSTOMERS} from './asyncConsts'


const defaultState = {
    customer: []
}

export const customerReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_MANY_CUSTOMERS: //Относится к редакс фанк
            return {...state, customer: [...state.customer, ...action.payload]}
        case ADD_CUSTOMER:
            return {...state, customer: [...state.customer, action.payload]}
        case REMOVE_CUSTOMERS:
            return {...state, customer: state.customer.filter(customer => customer.id !== action.payload) }
        default:
            return state;
    }
}	



