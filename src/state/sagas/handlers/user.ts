import { call, put } from "redux-saga/effects";
import { setUser } from "../../reducers/userReducer";
import { requestGetUser } from "../requests/user"

export function* handleGetUser(): Generator<any,any,any> {
    try {
        const response = yield call(requestGetUser);
        const { data } = response;
        yield put(setUser(data))
    } catch (error) {
        console.log(error);
    }
}