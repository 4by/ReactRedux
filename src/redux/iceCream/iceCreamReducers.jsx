import { BUY_ICECREAM } from './iceCreamArgs'

const initialState = {numOfIceCreams: 0}

export default(state = initialState, action) => {
  switch (action.type) {
    case BUY_ICECREAM: return {...state,  numOfIceCreams: action.payload}
    default: return state
  }
}

