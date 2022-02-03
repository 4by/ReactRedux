import { addCustomerAction, removeCustomerAction, addCashAction, getCashAction } from "./async/asyncActions";
import fetchCustomers from "./async/asyncQuery";

export const cashPropsBinder = (state, ownProps) => ({
    cash: ownProps.yes
    ? state.cashState.cash + ' | компонент вызван c пропсом "yes"'
    : state.cashState.cash + ' | компонент вызван без проса "yes"',
})

export const customerPropsBinder = state => ({
    customer: state.customerState.customer
})

export const cashFunsBinder = dispatch => ({
    addCash: number => dispatch(addCashAction(number)),
    getCash: number => dispatch(getCashAction(number)),
})

export const customerFunsBinder = dispatch => ({
    addCustomer: name => dispatch(addCustomerAction({ name, id: Date.now() })),
    removeCustomer: customer => dispatch(removeCustomerAction(customer.id)),
    fetchCustomers: () => dispatch(fetchCustomers()),
})