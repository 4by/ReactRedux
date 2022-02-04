import React from 'react'
import { Provider } from 'react-redux'
import syncStore from './redux/sync/store'
import CashConnect from './components/cashConnect'
import CashHook from './components/cashHook'
import Customer from './components/customer'

function App() {
  return (
    <Provider store={syncStore}>
      <div className='App'>
        <CashConnect yes />
        <CashHook />
        <Customer />
      </div>
    </Provider>
  )
}

export default App
