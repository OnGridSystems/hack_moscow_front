import { combineReducers } from 'redux';

import AppReducer from './AppReducer';
import UIReducer from './UIReducer';
import AuthReducer from './AuthReducer';
import UserReducer from './UserReducer';
import NotificationReducer from './NotificationReducer';
import ConfigReducer from './ConfigReducer';


const reducers = combineReducers({
  App: AppReducer,
  UI: UIReducer,
  Auth: AuthReducer,
  User: UserReducer,
  Notifications: NotificationReducer,
  Config: ConfigReducer,
});

export default reducers;
