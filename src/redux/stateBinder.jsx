import { buyCakeAction, buyIceCreamAction } from '.'

export const numOfCakesBind = state => ({ numOfCakes: state.cake.numOfCakes })
export const buyCakeBind = dispatch => ({ buyCake: number => dispatch(buyCakeAction(number)) })

export const numOfIceCreamsBind = state => ({ numOfIceCreams: state.iceCream.numOfIceCreams })
export const buyIceCreamBind = dispatch => ({ buyIceCream: number => dispatch(buyIceCreamAction(number)) })



export const numOfItemsBind = (state, ownProps) => (
    {
        numOfItems: ownProps.cake
            ? state.cake.numOfCakes
            : state.iceCream.numOfIceCreams
    }
)

export const buyItemBind = (dispatch, ownProps) => (
    {
        buyItem: ownProps.cake
            ? () => dispatch(buyCakeAction())
            : () => dispatch(buyIceCreamAction())
    }
)

