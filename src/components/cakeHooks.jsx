import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyCake } from '.'

export default() => {
  const numOfCakes = useSelector(state => state.cake.numOfCakes)
  const dispatch = useDispatch()
  return (
    <div>
      <h2>Binding through special hooks: {numOfCakes} </h2>
      <input type='text' value={numOfCakes} onChange={e => dispatch(buyCake(e.target.value))} />
    </div>
  )
}