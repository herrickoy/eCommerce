import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import headerNavbar from './headernavbarreducer';
import user from './userreducer';

const rootReducer = combineReducers({
  form,
  headerNavbar,
  user
});

export default rootReducer;