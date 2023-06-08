import { combineEpics, Epic } from 'redux-observable';
import {
  isActionOf, RootAction, RootState, Services,
} from 'typesafe-actions';
import { from } from 'rxjs';
import {
  filter, map, mergeMap, catchError,
} from 'rxjs/operators';
import {
  apiError, getToken, updateToken, getAllCollege, updateAllCollege, getAllSpec, updateAllSpec,
} from './actions';
import { GenTokenResults } from '../../services/gen-token/gen-token.service.types';
import { ListCollegeResults } from '../../services/meta-data/list-college/list-college.service.types';
import { ListSpecResults } from '../../services/meta-data/list-spec/list-spec.service.types';

export const generateTokenEpic : Epic<RootAction, RootAction, RootState, Services> = (action$, state$, { metaDataService }) => action$.pipe(
  filter(isActionOf(getToken)),
  mergeMap((action) => from(metaDataService.genTokenService(action.payload)).pipe(
    map((response : GenTokenResults) => updateToken(response)),
    catchError(async (error: Error) => apiError({ failed: true, backend: 'MetaData', errorMessage: error.message })),
  )),
);
export const listCollegeEpic : Epic<RootAction, RootAction, RootState, Services> = (action$, state$, { metaDataService }) => action$.pipe(
  filter(isActionOf(getAllCollege)),
  mergeMap((action) => from(metaDataService.listCollegeService(action.payload)).pipe(
    map((response : ListCollegeResults) => updateAllCollege(response)),
    catchError(async (error: Error) => apiError({ failed: true, backend: 'CollegeMeta', errorMessage: error.message })),
  )),
);
export const listSpecEpic : Epic<RootAction, RootAction, RootState, Services> = (action$, state$, { metaDataService }) => action$.pipe(
  filter(isActionOf(getAllSpec)),
  mergeMap((action) => from(metaDataService.listSpecService(action.payload)).pipe(
    map((response : ListSpecResults) => updateAllSpec(response)),
    catchError(async (error: Error) => apiError({ failed: true, backend: 'SpecMeta', errorMessage: error.message })),
  )),
);

export const metaDataEpics = combineEpics(generateTokenEpic, listCollegeEpic, listSpecEpic);
