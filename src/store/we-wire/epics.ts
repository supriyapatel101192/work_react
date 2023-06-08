import { combineEpics, Epic } from 'redux-observable';
import {
  isActionOf, RootAction, RootState, Services,
} from 'typesafe-actions';
import { from } from 'rxjs';
import {
  filter, map, mergeMap, catchError,
} from 'rxjs/operators';
import {
  apiError, registerPostReq, updateRegisterPostReq,
} from './actions';
import { RegisterResults } from '../../services/register/register.service.types';

export const registerEpic : Epic<RootAction, RootAction, RootState, Services> = (action$, state$, { weWireService }) => action$.pipe(
  filter(isActionOf(registerPostReq)),
  mergeMap((action) => from(weWireService.registerService(action.payload)).pipe(
    map((response : RegisterResults) => updateRegisterPostReq(response)),
    catchError(async (error: Error) => apiError({ failed: true, backend: 'We Wire', errorMessage: error.message })),
  )),
);

export const weWireEpics = combineEpics(registerEpic);
