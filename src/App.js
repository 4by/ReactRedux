import React from 'react'
import { Provider } from 'react-redux'
import store from './redux/store'
import Cash from './components/cash'
import Customer from './components/customer'

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <Cash yes />
        <Customer yes />
      </div>
    </Provider>
  )
}

export default App
