import React from 'react'
import { Provider } from 'react-redux'

import store from './redux/async/saga'
import Thunk from './components/thunk(connect)'
import Saga from './components/saga(hooks)'

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        {/* <Thunk /> */}
        <Saga />
      </div>
    </Provider>
  )
}

export default App
