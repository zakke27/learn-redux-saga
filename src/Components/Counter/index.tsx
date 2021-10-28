/**
 * @file Counter 组件
 * @date 2021-10-28
 * @author Zakke
 * @lastModify  2021-10-28
 */

import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import * as actions from '../../Store/Counter/actions';

import { RootState } from '../../Store/rootStore';

const Counter = () => {
    // useDispatch()是 hooks 写法，作用等同于 store.dispatch()
    const dispatch = useDispatch();

    // 从 CounterReducer 返回的 state 中 取出 count
    const { count } = useSelector((state: RootState) => state.CounterReducer);

    const increment = () => {
        // 注意这里是 incrementAction() 而不是 incrementAction
        // 因为 我们需要的是 action creator 函数执行返回的 action 对象
        dispatch(actions.incrementAction());
    };

    const decrement = () => {
        dispatch(actions.decrementAction());
    };
    return (
        <div>
            <button onClick={increment}>count +1</button>
            {'  '}
            <button onClick={decrement}>count -1</button>
            <hr />
            <h2>count: {count}</h2>
        </div>
    );
};

export default Counter;
