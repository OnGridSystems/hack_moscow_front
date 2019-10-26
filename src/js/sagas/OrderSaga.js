import axios from 'axios';
import { takeEvery, call, put, select } from 'redux-saga/effects';

import API from 'Api';

import * as OrderActions from 'js/actions/OrderActions';
import * as UserActions from 'js/actions/UserActions';


export class OrderSaga {
  static* getReward(action) {
    try {
      const response = yield call(axios, {
        method: 'GET',
        url: API.getDeliveryReward(),
        params: {
          ...action.payload,
        },
      });

      yield put(OrderActions.getRewardSuccess(response.data.reward));
    } catch (e) {
      yield put(OrderActions.getRewardFail());
    }
  }

  static* getAvailableOrders(action) {
    try {
      const response = yield call(axios, {
        method: 'GET',
        url: API.getAvailableOrders(),
      });

      yield put(OrderActions.getAvailableOrdersSuccess(response.data));
    } catch (e) {
      yield put(OrderActions.getAvailableOrdersFail());
    }
  }

  static* getUserOrders(action) {
    try {
      const response = yield call(axios, {
        method: 'GET',
        url: API.getUserOrders(),
      });

      yield put(OrderActions.getUserOrdersSuccess(response.data));
    } catch (e) {
      yield put(OrderActions.getUserOrdersFail());
    }
  }

  static* createDelivery(action) {
    try {
      const response = yield call(axios, {
        method: 'POST',
        url: API.createDelivery(),
        data: {
          ...action.payload,
        },
      });

      yield put(OrderActions.createDeliverySuccess());
      yield put(OrderActions.getUserOrdersRequest());
    } catch (e) {
      yield put(OrderActions.createDeliveryFail());
    }
  }

  static* takeOrder(action) {
    try {
      const response = yield call(axios, {
        method: 'POST',
        url: API.takeOrder(action.payload),
      });

      yield put(OrderActions.takeOrderSuccess());
      yield put(UserActions.getUserRequest()); // Refresh all orders
    } catch (e) {
      yield put(OrderActions.takeOrderFail());
    }
  }

  static* getOrderInfo(action) {
    try {
      const response = yield call(axios, {
        method: 'GET',
        url: API.orderInfo(),
        params: { orderSecret: action.payload },
      });

      yield put(OrderActions.getOrderInfoSuccess(response.data));
    } catch (e) {
      yield put(OrderActions.getOrderInfoFail());
    }
  }

  static* confirmDelivery(action) {
    try {
      const response = yield call(axios, {
        method: 'POST',
        url: API.confirmDelivery(action.payload),
        data: { orderSecret: action.payload },
      });

      yield put(OrderActions.confirmDeliverySuccess());
      yield put(OrderActions.getOrderInfoRequest(action.payload));
    } catch (e) {
      yield put(OrderActions.confirmDeliveryFail());
    }
  }

  static* cancelOrder(action) {
    try {
      const response = yield call(axios, {
        method: 'POST',
        url: API.cancelOrder(action.payload),
      });

      yield put(OrderActions.cancelOrderSuccess());

      yield put(UserActions.getUserRequest()); // Refresh all orders
    } catch (e) {
      yield put(OrderActions.cancelOrderFail());
    }
  }
}

export function* saga() {
  yield takeEvery(OrderActions.getRewardRequest, OrderSaga.getReward);
  yield takeEvery(OrderActions.createDeliveryRequest, OrderSaga.createDelivery);
  yield takeEvery(OrderActions.getUserOrdersRequest, OrderSaga.getUserOrders);
  yield takeEvery(OrderActions.getAvailableOrdersRequest, OrderSaga.getAvailableOrders);
  yield takeEvery(OrderActions.takeOrderRequest, OrderSaga.takeOrder);
  yield takeEvery(OrderActions.getOrderInfoRequest, OrderSaga.getOrderInfo);
  yield takeEvery(OrderActions.confirmDeliveryRequest, OrderSaga.confirmDelivery);
  yield takeEvery(OrderActions.cancelOrderRequest, OrderSaga.cancelOrder);
}
