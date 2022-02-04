import { addManyAsyncAction } from "./asyncActions";
import fetchCustomers from "./asyncQuery";

export const asyncPropsBinder = state => ({ async: state.asyncState.async })

export const asuncFunsBinder = dispatch => ({
    fetch: () => dispatch(fetchCustomers(addManyAsyncAction)),
})
