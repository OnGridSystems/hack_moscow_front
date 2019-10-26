import { createAction } from 'redux-act';


export const takeOrderRequest = createAction('TAKE_ORDER_REQUEST');
export const takeOrderSuccess = createAction('TAKE_ORDER_SUCCESS');
export const takeOrderFail = createAction('TAKE_ORDER_FAIL');

export const confirmDeliveryRequest = createAction('CONFIRM_DELIVERY_REQUEST');
export const confirmDeliverySuccess = createAction('CONFIRM_DELIVERY_SUCCESS');
export const confirmDeliveryFail = createAction('CONFIRM_DELIVERY_FAIL');

export const newDeliveryRequest = createAction('NEW_DELIVERY_REQUEST');
export const newDeliverySuccess = createAction('NEW_DELIVERY_SUCCESS');
export const newDeliveryFail = createAction('NEW_DELIVERY_FAIL');

export const getRewardRequest = createAction('GET_REWARD_REQUEST');
export const getRewardSuccess = createAction('GET_REWARD_SUCCESS');
export const getRewardFail = createAction('GET_REWARD_FAIL');
export const clearReward = createAction('CLEAR_REWARD');
