import { connect } from 'react-redux'
import { asyncPropsBinder, asuncFunsBinder } from '../redux/async/asyncStateBinder'


const App = ({ async, fetchCustomers }) => (
    <div>
        <button onClick={fetchCustomers}>Получать клиентов из базы</button>
        {
            async.length > 0
                ? async.map(async => <div>{async.name}</div>)
                : <div> Клиенты отсутствуют </div>
        }
    </div>
);



export default connect(asyncPropsBinder, asuncFunsBinder)(App)

