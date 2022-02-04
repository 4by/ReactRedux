import React from 'react'
import { Provider } from 'react-redux'
import syncStore from './redux/sync/store'
import Cash from './components/cash'
import Customer from './components/customer'

function App() {
  return (
    <Provider store={syncStore}>
      <div className='App'>
        <Cash yes />
        <Customer />
      </div>
    </Provider>
  )
}

export default App
