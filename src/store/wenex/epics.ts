import { combineEpics, Epic } from 'redux-observable';
import {
  isActionOf, RootAction, RootState, Services,
} from 'typesafe-actions';
import { from } from 'rxjs';
import {
  filter, map, mergeMap, catchError,
} from 'rxjs/operators';
import {
  apiError, contactUsPostReq, getForgotPassword, getLoginToken, getProfile, showData, updateContactUsPostReq, updateData, updateForgotPassword, updateProfile, updateToken,
} from './actions';
import { ContactUsResults } from '../../services/contact-us/contact-us.service.types';
import { LoginTokenResults } from '../../services/login/login-token.service.types';
import { ProfileResults } from '../../services/get-profile/get-profile.service.types';
import { ForgotPasswordResults } from '../../services/forgot-password/forgot-password.service.types';

export const showDataEpic : Epic<RootAction, RootAction, RootState, Services> = (action$, state$, { wenexService }) => action$.pipe(
  filter(isActionOf(showData)),
  mergeMap(() => from(wenexService.loadData()).pipe(
    map((response : string) => updateData(response)),
    catchError(async (error: Error) => apiError({ failed: true, backend: 'Wenex', errorMessage: error.message })),
  )),
);
export const contactUsPostEpic : Epic<RootAction, RootAction, RootState, Services> = (action$, state$, { wenexService }) => action$.pipe(
  filter(isActionOf(contactUsPostReq)),
  mergeMap((action) => from(wenexService.contactUsService(action.payload)).pipe(
    map((response : ContactUsResults) => updateContactUsPostReq(response)),
    catchError(async (error: Error) => apiError({ failed: true, backend: 'Wenex', errorMessage: error.message })),
  )),
);
export const generateTokenEpic : Epic<RootAction, RootAction, RootState, Services> = (action$, state$, { wenexService }) => action$.pipe(
  filter(isActionOf(getLoginToken)),
  mergeMap((action) => from(wenexService.loginTokenService(action.payload)).pipe(
    map((response : LoginTokenResults) => updateToken(response)),
    catchError(async (error: Error) => apiError({ failed: true, backend: 'Login', errorMessage: error.message })),
  )),
);

export const getProfileEpic : Epic<RootAction, RootAction, RootState, Services> = (action$, state$, { wenexService }) => action$.pipe(
  filter(isActionOf(getProfile)),
  mergeMap((action) => from(wenexService.profileService(action.payload)).pipe(
    map((response : ProfileResults) => updateProfile(response)),
    catchError(async (error: Error) => apiError({ failed: true, backend: 'Profile', errorMessage: error.message })),
  )),
);

export const getForgotPasswordEpic : Epic<RootAction, RootAction, RootState, Services> = (action$, state$, { wenexService }) => action$.pipe(
  filter(isActionOf(getForgotPassword)),
  mergeMap((action) => from(wenexService.forgotPasswordService(action.payload)).pipe(
    map((response : ForgotPasswordResults) => updateForgotPassword(response)),
    catchError(async (error: Error) => apiError({ failed: true, backend: 'ForgotPassword', errorMessage: error.message })),
  )),
);

export const wenexEpics = combineEpics(showDataEpic, contactUsPostEpic, generateTokenEpic, getProfileEpic, getForgotPasswordEpic);
