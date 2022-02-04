import React from 'react'
import { Provider } from 'react-redux'
import thunkStore from './redux/async/thunk/store'
import Thunk from './components/thunk'

function App() {
  return (
    <Provider store={thunkStore}>
      <div className='App'>
        <Thunk />
      </div>
    </Provider>
  )
}

export default App
