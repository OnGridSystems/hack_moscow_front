import { createReducer } from 'redux-act';
import { Map } from 'immutable';

import * as actions from 'js/actions/OrderActions';


const initialState = Map({
  reward: 0,
  availableOrders: [],
  userOrders: [],
  orderInfo: {},
});

const OrderReducer = createReducer(
  {
    [actions.getRewardSuccess]: (state, payload) => state.set('reward', payload),
    [actions.clearReward]: state => state.set('reward', 0),

    [actions.getAvailableOrdersSuccess]: (state, payload) => state.set('availableOrders', payload),
    [actions.getUserOrdersSuccess]: (state, payload) => state.set('userOrders', payload),
    [actions.getOrderInfoSuccess]: (state, payload) => state.set('orderInfo', payload),
  },
  initialState,
);

export default OrderReducer;
