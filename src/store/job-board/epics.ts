import { combineEpics, Epic } from 'redux-observable';
import {
  isActionOf, RootAction, RootState, Services,
} from 'typesafe-actions';
import { from } from 'rxjs';
import {
  filter, map, mergeMap, catchError,
} from 'rxjs/operators';
import {
  apiError, getAllJobs, getJobPositonById, getToken, updateAllJobs, updateJobPositonById, updateToken,
} from './actions';
import { GenTokenResults } from '../../services/gen-token/gen-token.service.types';
import { ListJobsResults } from '../../services/job-board/list-jobs/list-jobs.service.types';
import { JobPositionByIdResults } from '../../services/job-board/job-position-by-id/job-position-by-id.service.types';

export const generateTokenEpic : Epic<RootAction, RootAction, RootState, Services> = (action$, state$, { jobBoardService }) => action$.pipe(
  filter(isActionOf(getToken)),
  mergeMap((action) => from(jobBoardService.genTokenService(action.payload)).pipe(
    map((response : GenTokenResults) => updateToken(response)),
    catchError(async (error: Error) => apiError({ failed: true, backend: 'JobBoard', errorMessage: error.message })),
  )),
);
export const listJobsEpic : Epic<RootAction, RootAction, RootState, Services> = (action$, state$, { jobBoardService }) => action$.pipe(
  filter(isActionOf(getAllJobs)),
  mergeMap((action) => from(jobBoardService.listJobsService(action.payload)).pipe(
    map((response : ListJobsResults) => updateAllJobs(response)),
    catchError(async (error: Error) => apiError({ failed: true, backend: 'JobBoard', errorMessage: error.message })),
  )),
);
export const jobPositionByIdEpic : Epic<RootAction, RootAction, RootState, Services> = (action$, state$, { jobBoardService }) => action$.pipe(
  filter(isActionOf(getJobPositonById)),
  mergeMap((action) => from(jobBoardService.jobPositionByIdsService(action.payload)).pipe(
    map((response : JobPositionByIdResults) => updateJobPositonById(response)),
    catchError(async (error: Error) => apiError({ failed: true, backend: 'JobBoard', errorMessage: error.message })),
  )),
);

export const jobBoardEpics = combineEpics(generateTokenEpic, listJobsEpic, jobPositionByIdEpic);
