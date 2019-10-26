import axios from 'axios';
import { takeEvery, call, put, select } from 'redux-saga/effects';

import API from 'Api';

import AuthService from 'js/services/AuthService';

import * as OrderActions from 'js/actions/OrderActions';


export class OrderSaga {
  static* getReward() {
    try {
      // const response = yield call(axios, {
      //   method: 'GET',
      //   url: API.getReward(),
      // });

      // yield put(OrderActions.getRewardSuccess(response.data.reward));

      yield put(OrderActions.getRewardSuccess(1000));
    } catch (e) {
      yield put(OrderActions.getRewardFail());
    }
  }
}

export function* saga() {
  yield takeEvery(OrderActions.getRewardRequest, OrderSaga.getReward);
}
