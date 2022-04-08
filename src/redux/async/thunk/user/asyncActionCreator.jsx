import addManyAsyncAction from "./asyncActions";
import fetchCustomers from "../asyncQuery";

export const asyncPropsBinder = state => ({ users: state.asyncState.users })

// посколько асинхонно-приходящие данные нельзя вернуть из фунции:
// c помощью thunk можно делать dispatch в стейт не обьектов,
// а функций, которые 1) принимают action, 2) возвращают диспатч этого экшна 
export const asuncFunsBinder = dispatch => ({
    fetch: () => dispatch(fetchCustomers(addManyAsyncAction)),
})
