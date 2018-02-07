import { fromJS } from 'immutable';
import { LOAD_APPS_SUCCESS } from './actions';

const initialState = fromJS({
  apps: null,
  permission: null,
});

function reducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_APPS_SUCCESS:
      return state
      .set('apps', action.apps)
      .set('permission', action.permission);
    default:
      return state;
  }
}

export default reducer;
