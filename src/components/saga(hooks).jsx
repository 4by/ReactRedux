import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../redux/async/saga/user/userActions";

export default () => {
    const users = useSelector(state => state.userReducer.users)
    const dispatch = useDispatch()
    return (
        <div>
        <button onClick={() => dispatch(fetchUsers())}>Получать клиентов из базы</button>
        {
            users.length > 0
                ? users.map((e, i) => <div key = {i}>{e.name}</div>)
                : <div> Клиенты отсутствуют </div>
        }
    </div>
    );
}