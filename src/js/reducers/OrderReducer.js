import { createReducer } from 'redux-act';
import { Map } from 'immutable';

import * as actions from 'js/actions/OrderActions';


const initialState = Map({
  reward: 0,
});

const OrderReducer = createReducer(
  {
    [actions.getRewardSuccess]: (state, payload) => state.set('reward', payload),
    [actions.clearReward]: state => state.set('reward', 0),
  },
  initialState,
);

export default OrderReducer;
