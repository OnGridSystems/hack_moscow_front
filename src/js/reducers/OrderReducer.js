import { createReducer } from 'redux-act';
import { Map } from 'immutable';

import * as actions from 'js/actions/OrderActions';


const initialState = Map({});

const OrderReducer = createReducer({}, initialState);

export default OrderReducer;
