import USER_CONSTS from './userConsts'

const defaultState = { users: [] }

export default (state = defaultState, action) => {
    switch (action.type) {
        case USER_CONSTS.SET_USERS: return { ...state, users: action.payload }
    }
    return state
}

