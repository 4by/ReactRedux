import {SET_USERS, FETCH_USERS} from './userConsts'

export const setUsers = payload => ({type: SET_USERS, payload})
export const fetchUsers = () => ({type: FETCH_USERS})
