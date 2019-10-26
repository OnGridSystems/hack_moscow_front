import { all } from 'redux-saga/effects';

import { saga as AuthSaga } from './AuthSaga';
import { saga as UserSaga } from './UserSaga';
import { saga as OrderSaga } from './OrderSaga';


export default function* rootSaga() {
  yield all([UserSaga(), AuthSaga(), OrderSaga()]);
}
