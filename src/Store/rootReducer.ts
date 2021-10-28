/**
 * @file rootReducer.ts  汇总所有的 reducer 函数
 * @date 2021-10-28
 * @author Zakke
 * @lastModify  2021-10-28
 */

import { combineReducers } from 'redux';

// 引入我们创建的 CounterReducer
import { CounterReducer } from './Counter/reducer';

// 合并所有的 reducer 函数
const rootReducer = combineReducers({ CounterReducer });

export default rootReducer;
