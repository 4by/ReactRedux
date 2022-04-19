import { put, takeEvery, call } from "redux-saga/effects"
import USER_CONSTS from '../users/userConsts'
import { setUsers } from "../users/userActions";
import { axiosSagaQuery, delay } from "../asyncQuery";


function* fetchUserWorker() {
    // возвращает результат промиса
    // второй вариант: yield call(axiosSagaQuery)
    // call принимает не промис а ф-ю, возвращающую промис
    // через call удобнее проводить тесты, поэтому он мб предпочтительнее
    const json = (yield axiosSagaQuery()).data
    yield delay(1000)
    //put совершает dispatch прямо из асинхронной ф-и
    yield put(setUsers(json))
}

export function* userWatcher() {
    // как только redux-state c sagaMiddleware получает dispatch c action(1) - 
    // takeEvery запускает соответствующую ф-ю worker(2)
    yield takeEvery(USER_CONSTS.FETCH_USERS, fetchUserWorker)
    //здесь могут быть и другие yield для подписки на другие action
}


