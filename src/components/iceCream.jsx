import React from 'react'
import { connect } from 'react-redux'
import { buyIceCream } from '.'

const IceCreamContainer = ({ numOfIceCreams, buyIceCream }) => (
    <div>
      <h2>IceCream": {numOfIceCreams}</h2>
      <input type='text' value={numOfIceCreams} onChange={e => buyIceCream(e.target.value)} />
    </div>
)

const mapStateToProps = state => {
  return { numOfIceCreams: state.iceCream.numOfIceCreams }
}

const mapDispatchToProps = dispatch => {
  return { buyIceCream: number => dispatch(buyIceCream(number)) }
}

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer)
