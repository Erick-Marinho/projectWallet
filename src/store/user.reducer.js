import * as ActionTypes from '../common/ActionTypes';

const INITIAL_STATE = {
  email: '',
};

export default function reducer(state = INITIAL_STATE, action = null) {
  const { type, payload } = action;
  switch (type) {
    case ActionTypes.USER_DEFAULT:
      return { ...state, ...payload };

    default:
      return state;
  }
}
