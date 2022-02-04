import {SET_USERS} from './userConsts'


const defaultState = {
    users: []
}

export default (state = defaultState, action) => {
    switch(action.type) {
        case SET_USERS:
            return {...state, users: action.payload}
    }
    return state
}

