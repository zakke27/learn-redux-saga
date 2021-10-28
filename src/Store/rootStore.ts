/**
 * @file rootStore.ts 创建全局唯一的 store
 * @date 2021-10-28
 * @author Zakke
 * @lastModify  2021-10-28
 */

import { createStore } from 'redux';

import rootReducer from './rootReducer';

// 创建全局唯一的 store，用来存放 state
const store = createStore(rootReducer);

// 导出 rootReducer 的 state 类型
export type RootState = ReturnType<typeof rootReducer>;

export default store;
