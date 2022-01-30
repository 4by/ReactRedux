import { BUY_CAKE } from './cakeArgs'

const initialState = {numOfCakes: 0}

export default(state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE: return {...state,  numOfCakes: action.payload}
    default: return state
  }
}

