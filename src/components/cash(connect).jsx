import { connect } from 'react-redux'
import { cashPropsBinder, cashFunsBinder } from '../redux/sync/cash/cashStateBinder'


const App = ({ cash, addCash, getCash }) => (
    <div>
        {cash}
        <button onClick={() => addCash(Number(prompt()))}>ПОПОЛНИТЬ СЧЕТ</button>
        <button onClick={() => getCash(Number(prompt()))}>СНЯТЬ СО СЧЕТА</button>
    </div>
)



export default connect(cashPropsBinder, cashFunsBinder)(App)
