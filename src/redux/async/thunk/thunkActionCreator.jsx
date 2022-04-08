import {setUsers} from "../users/userActions";
import fetchCustomers from "./asyncQuery";

export const thunkPropsBinder = state => ({ users: state.thunkState.users })

// посколько асинхонно-приходящие данные нельзя вернуть из фунции:
// c помощью thunk можно делать dispatch в стейт не обьектов,
// а функций, которые 1) принимают action, 2) возвращают диспатч этого экшна 
export const thunkFunsBinder = dispatch => ({
    fetch: () => dispatch(fetchCustomers(setUsers)),
})
