import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { items } from './items';

const rootReducer = combineReducers({

  form: formReducer,
  /* more reducers can be added */
  items,
});

export default rootReducer;
