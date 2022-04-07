import { put, takeEvery, call } from "redux-saga/effects"
import USER_CONSTS from './userConsts'
import { setUsers } from "./userActions";

const fetchUsersFromApi = () => fetch('https://jsonplaceholder.typicode.com/users?_limit=10')

const delay = (ms) => new Promise(res => setTimeout(res, ms))



export function* userWatcher() {
    // как только redux-state c sagaMiddleware получает dispatch c action(1) - 
    // takeEvery запускает соответствующую ф-ю worker(2)
    yield takeEvery(USER_CONSTS.FETCH_USERS, fetchUserWorker)
    //здесь могут быть и другие yield для подписки на другие action
}



function* fetchUserWorker() {
    //call вытягивает результат из промиса
    const data = yield call(fetchUsersFromApi)
    const json = yield call(() => new Promise(res => res(data.json())))
    yield delay(1000)
    //put совершает dispatch прямо из асинхронной ф-и
    yield put(setUsers(json))
}

