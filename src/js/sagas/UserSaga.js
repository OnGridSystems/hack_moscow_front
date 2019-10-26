import axios from 'axios';
import { takeEvery, call, put, select, delay } from 'redux-saga/effects';

import API from 'Api';

import AuthService from 'js/services/AuthService';

import * as AuthActions from 'js/actions/AuthActions';
import * as UserActions from 'js/actions/UserActions';
import * as OrderActions from 'js/actions/OrderActions';
import * as UIActions from 'js/actions/UIActions';


export class UserSaga {
  static* getUser() {
    const isAuthorized = yield select(state => state.Auth.get('isAuthorized'));

    try {
      const response = yield call(axios, {
        method: 'GET',
        url: API.user(),
      });

      yield put(UserActions.getUserSuccess(response.data));

      if (response.data.role === 'SHIPPER') {
        yield put(OrderActions.getUserOrdersRequest());
      }

      if (response.data.role === 'CARRIER') {
        yield put(OrderActions.getUserOrdersRequest());
        yield put(OrderActions.getAvailableOrdersRequest());
      }

      if (!isAuthorized) {
        yield put(AuthActions.setAuthStatus());
        yield delay(1500);
        yield put(UIActions.hidePreloader());
      }
    } catch (e) {
      yield put(UserActions.getUserFail());
      if (isAuthorized) {
        yield put(AuthActions.unsetAuthStatus());
      }
      yield delay(1500);
      yield put(UIActions.hidePreloader());
    }
  }
}

export function* saga() {
  yield takeEvery(UserActions.getUserRequest, UserSaga.getUser);
}
