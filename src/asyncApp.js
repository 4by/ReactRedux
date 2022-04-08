import React from 'react'
import { Provider } from 'react-redux'
import Thunk from './components/thunk(connect)'
import Saga from './components/saga(hooks)'

import store from './redux/async/thunk'
// import store from './redux/async/saga'

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <Thunk />
        {/* <Saga /> */}
      </div>
    </Provider>
  )
}

export default App
