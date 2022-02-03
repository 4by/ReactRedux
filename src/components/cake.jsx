import React from 'react'
import { connect } from 'react-redux'
import { numOfCakesBind, buyCakeBind } from '../redux/stateBinder'

const CakeContainer = ({ numOfCakes, buyCake }) => (
    <div>
      <h2>Cake": {numOfCakes}</h2>
      <input type='text' value={numOfCakes} onChange={e => buyCake(e.target.value)} />
    </div>
)



export default connect(numOfCakesBind, buyCakeBind)(CakeContainer)
