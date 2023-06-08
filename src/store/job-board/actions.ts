import { createAction } from 'typesafe-actions';
import { GenTokenOptions, GenTokenResults } from '../../services/gen-token/gen-token.service.types';
import { JobPositionByIdOptions, JobPositionByIdResults } from '../../services/job-board/job-position-by-id/job-position-by-id.service.types';
import { ListJobsOptions, ListJobsResults } from '../../services/job-board/list-jobs/list-jobs.service.types';
import { ErrorAction } from '../../services/types';
import {
  API_ERROR, CLEAR_JOB_POSITION_BY_ID, GET_ALL_JOBS, GET_JOB_POSITION_BY_ID, GET_TOKEN, UPDATE_ALL_JOBS, UPDATE_JOB_POSITION_BY_ID, UPDATE_TOKEN,
} from './constants';

export const apiError = createAction(API_ERROR)<ErrorAction>();
export const getToken = createAction(GET_TOKEN)<GenTokenOptions>();
export const updateToken = createAction(UPDATE_TOKEN)<GenTokenResults>();
export const getAllJobs = createAction(GET_ALL_JOBS)<ListJobsOptions>();
export const updateAllJobs = createAction(UPDATE_ALL_JOBS)<ListJobsResults>();
export const getJobPositonById = createAction(GET_JOB_POSITION_BY_ID)<JobPositionByIdOptions>();
export const updateJobPositonById = createAction(UPDATE_JOB_POSITION_BY_ID)<JobPositionByIdResults>();
export const clearJobPositonById = createAction(CLEAR_JOB_POSITION_BY_ID)();
