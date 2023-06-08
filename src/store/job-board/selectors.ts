import { GenTokenResults } from '../../services/gen-token/gen-token.service.types';
import { JobPositionByIdResults } from '../../services/job-board/job-position-by-id/job-position-by-id.service.types';
import { ListJobsResults } from '../../services/job-board/list-jobs/list-jobs.service.types';
import { JobBoardAppState } from './action.types';

export const getToken = (state: JobBoardAppState): GenTokenResults => state.genToken;

export const getAllJobs = (state: JobBoardAppState): ListJobsResults => state.listJobs;

export const getJobById = (state: JobBoardAppState): JobPositionByIdResults => state.jobPositionById;
