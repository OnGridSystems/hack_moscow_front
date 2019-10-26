import { combineReducers } from 'redux';

import AppReducer from './AppReducer';
import UIReducer from './UIReducer';
import AuthReducer from './AuthReducer';
import UserReducer from './UserReducer';
import NotificationReducer from './NotificationReducer';
import ConfigReducer from './ConfigReducer';
import OrderReducer from './OrderReducer';


const reducers = combineReducers({
  App: AppReducer,
  UI: UIReducer,
  Auth: AuthReducer,
  User: UserReducer,
  Notifications: NotificationReducer,
  Config: ConfigReducer,
  Orders: OrderReducer,
});

export default reducers;
