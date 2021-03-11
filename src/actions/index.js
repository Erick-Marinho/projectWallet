import * as ActionTypes from '../common/ActionTypes';

export function userDefault(payload) {
  return {
    type: ActionTypes.USER_DEFAULT,
    payload,
  };
}

export function walletDefault(payload) {
  return {
    type: ActionTypes.WALLET_DEFAULT,
    payload,
  };
}
