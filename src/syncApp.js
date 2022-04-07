import React from 'react'
import { Provider } from 'react-redux'
import syncStore from './redux/sync'
import CashConnect from './components/cash(connect)'
import CashHook from './components/cash(hooks)'
import Customer from './components/customer(connect)'

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
