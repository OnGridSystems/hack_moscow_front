import { createAction } from 'redux-act';


export const takeOrderRequest = createAction('TAKE_ORDER_REQUEST');
export const takeOrderSuccess = createAction('TAKE_ORDER_SUCCESS');
export const takeOrderFail = createAction('TAKE_ORDER_FAIL');

export const confirmDeliveryRequest = createAction('CONFIRM_DELIVERY_REQUEST');
export const confirmDeliverySuccess = createAction('CONFIRM_DELIVERY_SUCCESS');
export const confirmDeliveryFail = createAction('CONFIRM_DELIVERY_FAIL');
