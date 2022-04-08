import ADD_MANY_ASYNC from './asyncConsts'

const defaultState = { users: [] }

export default (state = defaultState, action) => {
    switch (action.type) {
        case ADD_MANY_ASYNC: return { ...state, users: [...state.users, ...action.payload] }
        default: return state;
    }
}



