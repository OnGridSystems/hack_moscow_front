import { createReducer } from 'redux-act';
import * as actions from 'js/actions/UIActions';
import { Map } from 'immutable';


const initialState = Map({
  activeFiltersTab: 0,
  isMobileSidebarOpened: false,
  isDropdownOpened: false,
  isPreloaderActive: true,

  isModalOpened: false,
  modalType: '',
  modalOptions: {},
});

const UIReducer = createReducer(
  {
    [actions.setFiltersTab]: (state = initialState, payload) => state.set('activeFiltersTab', payload),

    [actions.openMobileSidebar]: (state = initialState) => state.set('isMobileSidebarOpened', true),
    [actions.hideMobileSidebar]: (state = initialState) => state.set('isMobileSidebarOpened', false),

    [actions.showDropdown]: (state = initialState) => state.set('isDropdownOpened', true),
    [actions.hideDropdown]: (state = initialState) => state.set('isDropdownOpened', false),

    [actions.showPreloader]: (state = initialState) => state.set('isPreloaderActive', true),
    [actions.hidePreloader]: (state = initialState) => state.set('isPreloaderActive', false),

    [actions.showModal]: (state = initialState, payload = {}) => state
      .set('isModalOpened', true)
      .set('modalType', payload.type)
      .set('modalOptions', payload.options),
    [actions.hideModal]: (state = initialState) => state
      .set('isModalOpened', false)
      .set('modalType', null)
      .set('modalOptions', null),
  },
  initialState,
);

export default UIReducer;
