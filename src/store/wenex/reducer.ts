import { ActionType, getType, Reducer } from 'typesafe-actions';
import {
  clearContactUsPostReq, updateContactUsPostReq, updateData,
} from './actions';
import * as actions from './actions';
import { WenexAppState } from './action.types';

export const initialState: WenexAppState = {
  data: {
    show: '',
  },
  contactUs: {
    message: '',
    errorMessage: '',
    error: false,
  },
  tokenData: {
    token: '',
    errorMessage: '',
  },
  profileData: {
    isError: false,
    profileData: {
      firstName: '',
      userName: '',
      lastName: '',
      candPhone: '',
      emailId: '',
      avatar: '',
      candGender: {
        id: '',
        value: '',
      },
      loginTp: {
        id: '',
        value: '',
      },
      dialCode: {
        id: 0,
        value: '',
      },
      candidateData: {
        isFresher: false,
        isFreelancer: false,
      },
      optWewire: false,
    },
  },
  forgotPassKeyData: {
    forgotPasswordData: '',
    errorMessage: '',
  },
};
export type AllAction = ActionType<typeof actions>;
const wenexReducer: Reducer<WenexAppState, AllAction> = (state: WenexAppState = initialState, action: AllAction): WenexAppState => {
  switch (action.type) {
    case getType(updateData):
      return {
        ...state,
        data: {
          show: action.payload,
        },
      };
    case getType(updateContactUsPostReq):
      return {
        ...state,
        contactUs: {
          message: action.payload.message,
          errorMessage: action.payload.errorMessage,
          error: action.payload.error,
        },
      };
    case getType(clearContactUsPostReq):
      return {
        ...state,
        contactUs: initialState.contactUs,
      };
    case getType(actions.updateToken):
      return {
        ...state,
        tokenData: {
          token: action.payload.token,
          errorMessage: action.payload.errorMessage,
        },
      };
    case getType(actions.updateProfile):
      return {
        ...state,
        profileData: {
          isError: false,
          profileData: {
            firstName: action.payload.profileData.firstName,
            userName: action.payload.profileData.userName,
            lastName: action.payload.profileData.lastName,
            candPhone: action.payload.profileData.candPhone,
            emailId: action.payload.profileData.emailId,
            avatar: action.payload.profileData.avatar,
            loginTp: {
              id: action.payload.profileData.loginTp.id,
              value: action.payload.profileData.loginTp.value,
            },
            candGender: {
              id: action.payload.profileData.candGender.id,
              value: action.payload.profileData.candGender.value,
            },
            dialCode: {
              id: action.payload.profileData.dialCode.id,
              value: action.payload.profileData.dialCode.value,
            },
            candidateData: {
              isFresher: action.payload.profileData.candidateData.isFresher,
              isFreelancer: action.payload.profileData.candidateData.isFreelancer,
            },
            optWewire: action.payload.profileData.optWewire,
          },
        },
      };
    case getType(actions.updateForgotPassword):
      return {
        ...state,
        forgotPassKeyData: {
          forgotPasswordData: action.payload.forgotPasswordData,
          errorMessage: action.payload.errorMessage,
        },
      };
    default:
      return state;
  }
};
export default wenexReducer;
