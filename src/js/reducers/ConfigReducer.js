import { createReducer } from 'redux-act';
import { Map } from 'immutable';

import * as ConfigActions from 'js/actions/ConfigActions';


const initialState = Map({
  config: null,
});

const ConfigReducer = createReducer(
  {
    [ConfigActions.getConfigSuccess]: (state, payload) => state.set('config', payload),
  },
  initialState,
);

export default ConfigReducer;
