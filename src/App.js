import React from 'react'
import { Provider } from 'react-redux'
import store from './redux/async/store'
import Cash from './components/cash'
import Customer from './components/customer'
import Async from './components/async'

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        {/* <Cash yes /> */}
        {/* <Customer /> */}
        <Async />
      </div>
    </Provider>
  )
}

export default App
