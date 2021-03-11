import { createStore, combineReducers } from 'redux';

import user from './user.reducer';
import wallet from './wallet.reducer';

const rootReducer = combineReducers({
  user,
  wallet,
});

const store = createStore(rootReducer);

export default store;
