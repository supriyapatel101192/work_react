import { createAction } from 'typesafe-actions';
import {
  GET_LOGIN_TOKEN, UPDATE_LOGIN_TOKEN,
  API_ERROR, CLEAR_CONTACT_US_DATA, CONTACT_US_DATA, SHOW_DATA, UPDATE_CONTACT_US_DATA, UPDATE_DATA, GET_PROFILE, UPDATE_PROFILE, GET_FORGOT_PASSWORD, UPDATE_FORGOT_PASSWORDE,
} from './constants';
import { ContactUsOptions, ContactUsResults } from '../../services/contact-us/contact-us.service.types';
import { LoginTokenResults, LoginOptions } from '../../services/login/login-token.service.types';
import { ErrorAction } from '../../services/types';
import { ProfileOptions, ProfileResults } from '../../services/get-profile/get-profile.service.types';
import { ForgotPasswordOptions, ForgotPasswordResults } from '../../services/forgot-password/forgot-password.service.types';

export const apiError = createAction(API_ERROR)<ErrorAction>();
export const showData = createAction(SHOW_DATA)<{}>();
export const updateData = createAction(UPDATE_DATA)<string>();
export const contactUsPostReq = createAction(CONTACT_US_DATA)<ContactUsOptions>();
export const updateContactUsPostReq = createAction(UPDATE_CONTACT_US_DATA)<ContactUsResults>();
export const clearContactUsPostReq = createAction(CLEAR_CONTACT_US_DATA)();
export const getLoginToken = createAction(GET_LOGIN_TOKEN)<LoginOptions>();
export const updateToken = createAction(UPDATE_LOGIN_TOKEN)<LoginTokenResults>();
export const getProfile = createAction(GET_PROFILE)<ProfileOptions>();
export const updateProfile = createAction(UPDATE_PROFILE)<ProfileResults>();
export const getForgotPassword = createAction(GET_FORGOT_PASSWORD)<ForgotPasswordOptions>();
export const updateForgotPassword = createAction(UPDATE_FORGOT_PASSWORDE)<ForgotPasswordResults>();
