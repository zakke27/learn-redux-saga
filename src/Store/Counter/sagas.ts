/**
 * @file sagas.ts saga 异步 action worker
 * @date 2021-10-28
 * @author Zakke
 * @lastModify  2021-10-28
 */
import * as actions from '../Counter/actions';

import { delay, put, takeEvery } from 'redux-saga/effects';
import { ActionTypes } from './actionTypes';

export function* incrementAsync() {
    yield delay(1000);
    yield put(actions.incrementAction());
}

// 监听 INCREMENT_ASYNC 类型的 action，触发 incrementAsync
export function* watchIncrementAsync() {
    yield takeEvery(ActionTypes.INCREMENT_ASYNC, incrementAsync);
}
