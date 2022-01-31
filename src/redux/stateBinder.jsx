import { buyCake } from "./cake/cakeArgs"

export const dataBind = state => {
    return { numOfCakes: state.cake.numOfCakes }
}

export const reducerBind = dispatch => {
    return { buyCake: number => dispatch(buyCake(number)) }
}
