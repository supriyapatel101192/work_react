import { ActionType, getType, Reducer } from 'typesafe-actions';
import {
  updateAllCollege, updateAllSpec, updateToken,
} from './actions';
import * as actions from './actions';
import { MetaDataAppState } from './action.types';

export const initialState: MetaDataAppState = {
  genToken: {
    token: '',
    errorMessage: '',
  },
  listCollege: {
    count: 0,
    isNext: false,
    isPrev: false,
    nextPage: 0,
    prevPage: 0,
    pages: 0,
    collegeData: [],
    collegeInfo: [],
    isError: false,
  },
  listSpec: {
    count: 0,
    isNext: false,
    isPrev: false,
    nextPage: 0,
    prevPage: 0,
    pages: 0,
    specData: [],
    specInfo: [],
    isError: false,
  },
};
export type AllAction = ActionType<typeof actions>;
const metaDataReducer: Reducer<MetaDataAppState, AllAction> = (state: MetaDataAppState = initialState, action: AllAction): MetaDataAppState => {
  switch (action.type) {
    case getType(updateToken):
      return {
        ...state,
        genToken: {
          token: action.payload.token,
          errorMessage: action.payload.errorMessage,
        },
      };
    case getType(updateAllCollege):
      return {
        ...state,
        listCollege: {
          count: action.payload.count,
          isNext: action.payload.isNext,
          isPrev: action.payload.isPrev,
          nextPage: action.payload.nextPage,
          prevPage: action.payload.prevPage,
          pages: action.payload.pages,
          collegeData: action.payload.collegeData,
          collegeInfo: action.payload.collegeInfo,

          isError: action.payload.isError,
        },
      };
    case getType(updateAllSpec):
      return {
        ...state,
        listSpec: {
          count: action.payload.count,
          isNext: action.payload.isNext,
          isPrev: action.payload.isPrev,
          nextPage: action.payload.nextPage,
          prevPage: action.payload.prevPage,
          pages: action.payload.pages,
          specData: action.payload.specData,
          specInfo: action.payload.specInfo,

          isError: action.payload.isError,
        },
      };
    default:
      return state;
  }
};
export default metaDataReducer;
