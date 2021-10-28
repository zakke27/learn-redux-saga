/**
 * @file reducer.ts  reducer函数
 * @date 2021-10-28
 * @author Zakke
 * @lastModify  2021-10-28
 */

import { Action } from 'redux';
import { ActionTypes } from './actionTypes';

// 初始 state
const initState = {
    count: 0,
};

export const CounterReducer = (state = initState, action: Action) => {
    switch (action.type) {
        case ActionTypes.INCREMENT:
            // 永远记住 reducer 函数是一个纯函数，不能直接操作 state，必须返回一个新的 state
            return {
                ...state,
                count: state.count + 1,
            };
        case ActionTypes.DECREMENT:
            return {
                ...state,
                count: state.count - 1,
            };
        default:
            return state;
    }
};
