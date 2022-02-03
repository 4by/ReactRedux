import React from 'react'
import { connect } from 'react-redux'
import { buyIceCreamAction } from '.'

function IceCreamContainer ({numOfIceCreams, buyIceCream}) {
  return (
    <div>
      <h2>Number of ice creams - {numOfIceCreams} </h2>
      <button onClick={buyIceCream}>Buy Ice Cream</button>
    </div>
  )
}

const mapStateToProps = state => {
  return { numOfIceCreams: state.iceCream.numOfIceCreams }
}

const mapDispatchToProps = dispatch => {
  return { buyIceCream: number => dispatch(buyIceCreamAction(number)) }
}

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer)
