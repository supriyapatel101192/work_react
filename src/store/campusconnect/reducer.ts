import { ActionType, getType, Reducer } from 'typesafe-actions';
import {
  clearRegisterFrsPostReq, updateRegisterFrsPostReq, updateData,
} from './actions';
import * as actions from './actions';
import { CCAppState } from './action.types';

export const initialState: CCAppState = {
  data: {
    show: '',
  },
  registerUser: {
    message: '',
    errorMessage: '',
    error: false,
  },
  tokenData: {
    token: '',
    errorMessage: '',
  },
};
export type AllAction = ActionType<typeof actions>;
const campusconnectReducer: Reducer<CCAppState, AllAction> = (state: CCAppState = initialState, action: AllAction): CCAppState => {
  switch (action.type) {
    case getType(updateData):
      return {
        ...state,
        data: {
          show: action.payload,
        },
      };
    case getType(updateRegisterFrsPostReq):
      return {
        ...state,
        registerUser: {
          message: action.payload.message,
          errorMessage: action.payload.errorMessage,
          error: action.payload.error,
        },
      };
    case getType(clearRegisterFrsPostReq):
      return {
        ...state,
        registerUser: initialState.registerUser,
      };
    default:
      return state;
  }
};
export default campusconnectReducer;
