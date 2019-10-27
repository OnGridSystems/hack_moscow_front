import axios from 'axios';
import { takeEvery, call, put, all, delay } from 'redux-saga/effects';

import API from 'Api';

import AuthService from 'js/services/AuthService';

import * as AuthActions from 'js/actions/AuthActions';
import * as UserActions from 'js/actions/UserActions';
import * as UIActions from 'js/actions/UIActions';
import * as NotificationActions from 'js/actions/NotificationActions';


export class AuthSaga {
  static* login(action) {
    try {
      const response = yield call(axios, {
        method: 'POST',
        url: API.login(),
        data: {
          username: action.payload.username,
          password: action.payload.password,
        },
      });
      AuthService.setJWT(response.data.token);

      yield all([
        put(UIActions.showPreloader()),
        put(AuthActions.setAuthStatus()),
        put(AuthActions.loginSuccess()),
        put(UserActions.getUserRequest()),
      ]);

      yield delay(1500);
      yield put(UIActions.hidePreloader());
    } catch (e) {
      yield put(AuthActions.loginFail());

      yield delay(300);
      yield put(
        NotificationActions.setNotification({
          module: 'login',
          type: 'error',
          message: "Can't login with provided credentials",
        }),
      );
    }
  }

  static* logout() {
    try {
      AuthService.unsetJWT();

      yield all([put(AuthActions.unsetAuthStatus()), put(AuthActions.logoutSuccess())]);
    } catch (e) {
      yield put(AuthActions.logoutFail());
    }
  }

  static* register(action) {
    try {
      const response = yield call(axios, {
        method: 'POST',
        url: API.register(),
        data: {
          ...action.payload,
        },
      });
      AuthService.setJWT(response.data.token);

      yield all([
        put(UIActions.showPreloader()),
        put(AuthActions.setAuthStatus()),
        put(AuthActions.registerSuccess()),
        put(UserActions.getUserRequest()),
      ]);
      yield delay(1500);
      yield put(UIActions.hidePreloader());
    } catch (e) {
      yield put(AuthActions.registerFail());

      yield delay(300);
      yield put(
        NotificationActions.setNotification({
          module: 'register',
          type: 'error',
          message: e.message,
        }),
      );
    }
  }
}

export function* saga() {
  yield takeEvery(AuthActions.loginRequest, AuthSaga.login);
  yield takeEvery(AuthActions.logoutRequest, AuthSaga.logout);
  yield takeEvery(AuthActions.registerRequest, AuthSaga.register);
}
