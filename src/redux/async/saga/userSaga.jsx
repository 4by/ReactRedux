import { put, takeEvery, call } from "redux-saga/effects"
import USER_CONSTS from '../users/userConsts'
import { setUsers } from "../users/userActions";

//возвращает промис с результатом (статусы и тд)
const fetchUsersFromApi = () => fetch('https://jsonplaceholder.typicode.com/users?_limit=10')

//принимает результат промиса 
//возвращает промис с результатом: ответ сервера
const getAnswer = (arg) => new Promise(res => res(arg.json()))

//возвращает промис без результата (через задержку в размере ms) 
const delay = (ms) => new Promise(res => setTimeout(res, ms))


export function* userWatcher() {
    // как только redux-state c sagaMiddleware получает dispatch c action(1) - 
    // takeEvery запускает соответствующую ф-ю worker(2)
    yield takeEvery(USER_CONSTS.FETCH_USERS, fetchUserWorker)
    //здесь могут быть и другие yield для подписки на другие action
}



function* fetchUserWorker() {
    // возвращает результат промиса
    // второй вариант: yield call(fetchUsersFromApi)
    // call принимает не промис а ф-ю, возвращающую промис
    const data = yield fetchUsersFromApi()
    const json = yield getAnswer(data)
    yield delay(1000)
    //put совершает dispatch прямо из асинхронной ф-и
    yield put(setUsers(json))
}

