import React from 'react'
import { connect } from 'react-redux'
import { numOfIceCreamsBind, buyIceCreamBind } from '../redux/stateBinder'

function IceCreamContainer({ numOfIceCreams, buyIceCream }) {
  return (
    <div>
      <h2>Number of ice creams - {numOfIceCreams} </h2>
      <button onClick={buyIceCream}>Buy Ice Cream</button>
    </div>
  )
}



export default connect(numOfIceCreamsBind, buyIceCreamBind)(IceCreamContainer)
