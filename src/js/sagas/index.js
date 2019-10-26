import { all } from 'redux-saga/effects';

import { saga as AppSaga } from './AppSaga';
import { saga as AuthSaga } from './AuthSaga';
import { saga as UserSaga } from './UserSaga';
import { saga as OrderSaga } from './OrderSaga';


export default function* rootSaga() {
  yield all([AppSaga(), AuthSaga(), OrderSaga()]);
}
