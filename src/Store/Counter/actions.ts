/**
 * @file actions.ts  定义产生 action 的 creator 函数
 * @date 2021-10-28
 * @author Zakke
 * @lastModify  2021-10-28
 */

import { ActionTypes } from './actionTypes';

import { Action } from 'redux';

/**
 * increment 的 action creator 函数
 * @returns {Action} INCREMENT 类型的 action
 */
export const incrementAction = (): Action => ({ type: ActionTypes.INCREMENT });

/**
 * decrement 的 action creator 函数
 * @returns {Action} DECREMENT 类型的 action
 */
export const decrementAction = (): Action => ({ type: ActionTypes.DECREMENT });

/**
 * incrementAsync 的 action creator 函数
 * @returns {Action} INCREMENT_ASYNC 类型的 action
 */
export const incrementAsyncAction = (): Action => ({ type: ActionTypes.INCREMENT_ASYNC });
