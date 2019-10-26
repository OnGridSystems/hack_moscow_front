import { createAction } from 'redux-act';


export const takeOrderRequest = createAction('TAKE_ORDER_REQUEST');
export const takeOrderSuccess = createAction('TAKE_ORDER_SUCCESS');
export const takeOrderFail = createAction('TAKE_ORDER_FAIL');

export const confirmDeliveryRequest = createAction('CONFIRM_DELIVERY_REQUEST');
export const confirmDeliverySuccess = createAction('CONFIRM_DELIVERY_SUCCESS');
export const confirmDeliveryFail = createAction('CONFIRM_DELIVERY_FAIL');

export const createDeliveryRequest = createAction('CREATE_DELIVERY_REQUEST');
export const createDeliverySuccess = createAction('CREATE_DELIVERY_SUCCESS');
export const createDeliveryFail = createAction('CREATE_DELIVERY_FAIL');

export const getRewardRequest = createAction('GET_REWARD_REQUEST');
export const getRewardSuccess = createAction('GET_REWARD_SUCCESS');
export const getRewardFail = createAction('GET_REWARD_FAIL');
export const clearReward = createAction('CLEAR_REWARD');

export const getAvailableOrdersRequest = createAction('GET_AVAILABLE_ORDERS_REQUEST');
export const getAvailableOrdersSuccess = createAction('GET_AVAILABLE_ORDERS_SUCCESS');
export const getAvailableOrdersFail = createAction('GET_AVAILABLE_ORDERS_FAIL');

export const getUserOrdersRequest = createAction('GET_USER_ORDERS_REQUEST');
export const getUserOrdersSuccess = createAction('GET_USER_ORDERS_SUCCESS');
export const getUserOrdersFail = createAction('GET_USER_ORDERS_FAIL');

export const getOrderInfoRequest = createAction('GET_ORDER_INFO_REQUEST');
export const getOrderInfoSuccess = createAction('GET_ORDER_INFO_SUCCESS');
export const getOrderInfoFail = createAction('GET_ORDER_INFO_FAIL');

export const cancelOrderRequest = createAction('CANCEL_ORDER_REQUEST');
export const cancelOrderSuccess = createAction('CANCEL_ORDER_SUCCESS');
export const cancelOrderFail = createAction('CANCEL_ORDER_FAIL');
