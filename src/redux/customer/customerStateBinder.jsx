import { addCustomerAction, removeCustomerAction } from "./customerActions";
import fetchCustomers from "./asyncQuery";

export const customerPropsBinder = state => ({
    customer: state.customerState.customer
})

export const customerFunsBinder = dispatch => ({
    addCustomer: name => dispatch(addCustomerAction({ name, id: Date.now() })),
    removeCustomer: customer => dispatch(removeCustomerAction(customer.id)),
    fetchCustomers: () => dispatch(fetchCustomers()),
})