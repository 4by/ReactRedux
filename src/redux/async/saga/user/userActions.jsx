import USER_CONSTS from './userConsts'

export const setUsers = payload => ({type: USER_CONSTS.SET_USERS, payload})
export const fetchUsers = () => ({type: USER_CONSTS.FETCH_USERS})
