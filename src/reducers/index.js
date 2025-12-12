import { combineReducers } from 'redux';
import itemsReducer from './itemsReducer';

/**
 * Root reducer combining all app reducers
 * Currently only `itemsReducer` is present
 */
const rootReducer = combineReducers({
  items: itemsReducer,
});

export default rootReducer;
