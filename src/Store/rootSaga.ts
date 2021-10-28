/**
* @file rootSaga.ts 汇总所有的 saga
* @date 2021-10-28
* @author Zakke
* @lastModify  2021-10-28
*/
import { all } from 'redux-saga/effects';

import {watchIncrementAsync} from './Counter/sagas'

// 导出 rootSaga，汇总所有的 saga 一起执行
export default function* rootSaga (){
    yield all([
        watchIncrementAsync()
    ])
}