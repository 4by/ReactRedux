import React from 'react'
import { connect } from 'react-redux'
import { numOfItemsBind, buyItemBind } from '../redux/stateBinder'

function ItemContainer({ numOfItems, buyItem }) {
  return (
    <>
      <h2>Item - {numOfItems}</h2>
      <div>
        <button onClick={buyItem}>Buy Items</button>
      </div>
    </>
  )
}


export default connect(
  numOfItemsBind,
  buyItemBind
)(ItemContainer)