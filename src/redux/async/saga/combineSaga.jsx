import {all} from "redux-saga/effects"
import {userWatcher} from "./userSaga";

export function* rootWatcher() {
    //all обьединяет все takeEvery в 1
    yield all([userWatcher()])
}
