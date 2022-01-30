import React from 'react'
import { connect } from 'react-redux'
import { buyCake } from '.'

const CakeContainer = ({ numOfCakes, buyCake }) => (
    <div>
      <h2>Cake": {numOfCakes}</h2>
      <input type='text' value={numOfCakes} onChange={e => buyCake(e.target.value)} />
    </div>
)

const mapStateToProps = state => {
  return { numOfCakes: state.cake.numOfCakes }
}

const mapDispatchToProps = dispatch => {
  return { buyCake: number => dispatch(buyCake(number)) }
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer)
