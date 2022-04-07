import CASH_CONSTS from './cashConsts'

const defaultState = { cash: 5 }

export const cashReducer = (state = defaultState, action) => {
    switch (action.type) {
        case CASH_CONSTS.ADD_CASH: return { ...state, cash: state.cash + action.payload }
        case CASH_CONSTS.GET_CASH: return { ...state, cash: state.cash - action.payload }
        default: return state;
    }
}