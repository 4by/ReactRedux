import React from 'react'
import { connect } from 'react-redux'
import { buyCakeAction, buyIceCreamAction } from '.'

function ItemContainer(props) {
  return (
    <>
      <h2>Item - {props.item}</h2>
      <div>
        <button onClick={props.buyItem}>Buy Items</button>
      </div>
    </>
  )
}

const mapStateToProps = (state, ownProps) => {
  const itemState = ownProps.cake
    ? state.cake.numOfCakes
    : state.iceCream.numOfIceCreams
  return {
    item: itemState
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const dispatchFunction = ownProps.cake
    ? () => dispatch(buyCakeAction())
    : () => dispatch(buyIceCreamAction())
  return {
    buyItem: dispatchFunction
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemContainer)