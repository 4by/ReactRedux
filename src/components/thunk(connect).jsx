import { connect } from 'react-redux'
import { thunkPropsBinder, thunkFunsBinder } from '../redux/async/thunk/thunkActionCreator'


const App = ({ users, fetch }) => (
    <div>
        <button onClick={fetch}>Получать клиентов из базы</button>
        {
            users.length > 0
                ? users.map((e, i) => <div key = {i}>{e.name}</div>)
                : <div> Клиенты отсутствуют </div>
        }
    </div>
);



export default connect(thunkPropsBinder, thunkFunsBinder)(App)

