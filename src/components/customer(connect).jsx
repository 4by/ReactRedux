import { connect } from 'react-redux'
import { customerPropsBinder, customerFunsBinder } from '../redux/sync/customer/customerActionCreator'


const App = ({ customer, addCustomer, removeCustomer, fetchCustomers }) => (

    <div>
        <button onClick={() => addCustomer(prompt())}>Добавить клиента</button>
        {
            customer.length > 0
                ?
                <div>
                    {customer.map((e, i) =>
                        <div key={i} onClick={() => removeCustomer(e)}>{e.name}</div>
                    )}
                </div>
                :
                <div> Клиенты отсутствуют </div>
        }
    </div>
);



export default connect(customerPropsBinder, customerFunsBinder)(App)

