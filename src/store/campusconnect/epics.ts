import { combineEpics, Epic } from 'redux-observable';
import {
  isActionOf, RootAction, RootState, Services,
} from 'typesafe-actions';
import { from } from 'rxjs';
import {
  filter, map, mergeMap, catchError,
} from 'rxjs/operators';
import {
  apiError, registerFrsPostReq, updateRegisterFrsPostReq,
} from './actions';
import { RegisterFrsResults } from '../../services/register-fresher/register-fresher.service.types';

export const registerFrsPostEpic : Epic<RootAction, RootAction, RootState, Services> = (action$, state$, { registerCCService }) => action$.pipe(
  filter(isActionOf(registerFrsPostReq)),
  mergeMap((action) => from(registerCCService.registerFrsService(action.payload)).pipe(
    map((response : RegisterFrsResults) => updateRegisterFrsPostReq(response)),
    catchError(async (error: Error) => apiError({ failed: true, backend: 'CampusConnect', errorMessage: error.message })),
  )),
);

export const campusConnectEpics = combineEpics(registerFrsPostEpic);
