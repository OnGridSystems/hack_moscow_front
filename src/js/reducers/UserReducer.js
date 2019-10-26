import { createReducer } from 'redux-act';
import { Map } from 'immutable';

import * as actions from 'js/actions/UserActions';


const initialState = Map({
  username: '',
  role: 'SHIPPER',
  balance: 0,

  location: '',

  smartContract: '',
  vehicle: '',
  totalBalance: 0,
  lockedBalance: 0,
  availableBalance: 0,
  maxLoad: 0,
});

const UserReducer = createReducer(
  {
    [actions.getUserSuccess]: (state, payload) => state.mergeDeep(payload),
    [actions.getUserFail]: () => initialState,
  },
  initialState,
);

export default UserReducer;
