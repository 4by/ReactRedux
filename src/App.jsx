import React from 'react'
import { Provider } from 'react-redux'
import store from './redux/store'
import Cake from './components/cake'
import IceCream from './components/iceCream'
import Item from './components/item'

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <Cake />
        <IceCream />
        <Item cake />
        <Item />
      </div>
    </Provider>
  )
}

export default App
