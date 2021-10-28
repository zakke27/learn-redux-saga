/**
 * @file rootStore.ts 创建全局唯一的 store
 * @date 2021-10-28
 * @author Zakke
 * @lastModify  2021-10-28
 */

import { createStore, applyMiddleware } from 'redux';

import rootReducer from './rootReducer';

import rootSaga from './rootSaga';

import createSagaMiddleware from 'redux-saga';

// 创建一个 redux saga 中间件
const sagaMiddleware = createSagaMiddleware();

// 创建全局唯一的 store，用来存放 state, 同时应用中间件
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

// 运行 rootSaga
sagaMiddleware.run(rootSaga);

// 导出 rootReducer 的 state 类型
export type RootState = ReturnType<typeof rootReducer>;

export default store;
