import React from 'react'
import { Provider } from 'react-redux'
import store from './redux/store'
import Cake from './components/cake'
import IceCream from './components/iceCream'

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <Cake />
        <IceCream />
      </div>
    </Provider>
  )
}

export default App
