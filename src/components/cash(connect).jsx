import { connect } from 'react-redux'
import { cashPropsBinder, cashFunsBinder } from '../redux/sync/cash/cashActionCreator'


const App = ({ cash, addCash, getCash }) => (
    <div>
        {cash}
        <button onClick={() => addCash(Number(prompt()))}>ПОПОЛНИТЬ СЧЕТ</button>
        <button onClick={() => getCash(Number(prompt()))}>СНЯТЬ СО СЧЕТА</button>
    </div>
)

//connect вытягивает свойства из actionCreator и отправляет их в props элемента
export default connect(cashPropsBinder, cashFunsBinder)(App)

