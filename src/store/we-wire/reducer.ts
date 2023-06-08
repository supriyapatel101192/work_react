import { ActionType, getType, Reducer } from 'typesafe-actions';
import {
  clearRegisterPostReq, updateRegisterPostReq,
} from './actions';
import * as actions from './actions';
import { WeWireAppState } from './action.types';

export const initialState: WeWireAppState = {

  wwRegister: {
    message: '',
    errorMessage: '',
    error: false,
  },
};
export type AllAction = ActionType<typeof actions>;
const weWireReducer: Reducer<WeWireAppState, AllAction> = (state: WeWireAppState = initialState, action: AllAction): WeWireAppState => {
  switch (action.type) {
    case getType(updateRegisterPostReq):
      return {
        ...state,
        wwRegister: {
          message: action.payload.message,
          errorMessage: action.payload.errorMessage,
          error: action.payload.error,
        },
      };
    case getType(clearRegisterPostReq):
      return {
        ...state,
        wwRegister: initialState.wwRegister,
      };
    default:
      return state;
  }
};
export default weWireReducer;
