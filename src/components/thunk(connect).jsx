import { connect } from 'react-redux'
import { asyncPropsBinder, asuncFunsBinder } from '../redux/async/thunk/asyncActionCreator'


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



export default connect(asyncPropsBinder, asuncFunsBinder)(App)

