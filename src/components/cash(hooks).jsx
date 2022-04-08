import { useSelector, useDispatch } from 'react-redux'
import { addCashAction, getCashAction } from "../redux/sync/cash/cashActions";

const App = () => {
    //useSelector просто получает стейт
    const cash = useSelector(state => state.cashState.cash)
    //useDispatch диспатчит(отправляет экшны в стейт)
    const dispatch = useDispatch()
    return (
        <div>
            {cash}
            <button onClick={() => dispatch(addCashAction(Number(prompt())))}>ПОПОЛНИТЬ СЧЕТ</button>
            <button onClick={() => dispatch(getCashAction(Number(prompt())))}>СНЯТЬ СО СЧЕТА</button>
        </div>
    )
}

export default App
