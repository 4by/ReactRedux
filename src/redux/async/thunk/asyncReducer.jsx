import { ADD_MANY_ASYNC } from './asyncConsts'

const defaultState = { async: [] }
export const asyncReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_MANY_ASYNC: return { ...state, async: [...state.async, ...action.payload] }
        default: return state;
    }
}



