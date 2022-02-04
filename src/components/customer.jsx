import { connect } from 'react-redux'
import { customerPropsBinder, customerFunsBinder } from '../redux/sync/customer/customerStateBinder'


const App = ({ customer, addCustomer, removeCustomer, fetchCustomers }) => (

    <div>
        <button onClick={() => addCustomer(prompt())}>Добавить клиента</button>
        {
            customer.length > 0
                ?
                <div>
                    {customer.map(customer =>
                        <div onClick={() => removeCustomer(customer)}>{customer.name}</div>
                    )}
                </div>
                :
                <div> Клиенты отсутствуют </div>
        }
    </div>
);



export default connect(customerPropsBinder, customerFunsBinder)(App)

