import { connect } from 'react-redux'
import { asyncPropsBinder, asuncFunsBinder } from '../redux/async/thunk/user/asyncActionCreator'


const App = ({ async, fetch }) => (
    <div>
        <button onClick={fetch}>Получать клиентов из базы</button>
        {
            async.length > 0
                ? async.map((e, i) => <div key = {i}>{e.name}</div>)
                : <div> Клиенты отсутствуют </div>
        }
    </div>
);



export default connect(asyncPropsBinder, asuncFunsBinder)(App)

