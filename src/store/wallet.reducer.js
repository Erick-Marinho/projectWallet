import * as ActionTypes from '../common/ActionTypes';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

export default function reducer(state = INITIAL_STATE, action = null) {
  const { type, payload } = action;
  switch (type) {
    case ActionTypes.WALLET_DEFAULT:
      return { ...state, ...payload };

    default:
      return state;
  }
}
