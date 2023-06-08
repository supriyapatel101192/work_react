import { GenTokenRequest } from './gen-token/gen-token.service';
import {
  GenTokenService, GenTokenOptions, GenTokenResponse, GenTokenResults,
} from './gen-token/gen-token.service.types';
import { GenTokenTransform } from './gen-token/gen-token.transform';
import { JobPositionByIdRequest } from './job-board/job-position-by-id/job-position-by-id.service';
import {
  JobPositionByIdOptions, JobPositionByIdResponse, JobPositionByIdResults, JobPositionByIdService,
} from './job-board/job-position-by-id/job-position-by-id.service.types';
import { JobPositionByIdTransform } from './job-board/job-position-by-id/job-position-by-id.transform';
import { ListJobsRequest } from './job-board/list-jobs/list-jobs.service';

import {
  ListJobsService, ListJobsOptions, ListJobsResponse, ListJobsResults,
} from './job-board/list-jobs/list-jobs.service.types';
import { ListJobsTransform } from './job-board/list-jobs/list-jobs.transform';
import { createService } from './service';

export const genTokenService: GenTokenService = createService<GenTokenOptions, GenTokenResponse, GenTokenResults>(GenTokenRequest, GenTokenTransform);

export const listJobsService: ListJobsService = createService<ListJobsOptions, ListJobsResponse, ListJobsResults>(ListJobsRequest, ListJobsTransform);

export const jobPositionByIdsService: JobPositionByIdService = createService<JobPositionByIdOptions, JobPositionByIdResponse, JobPositionByIdResults>(JobPositionByIdRequest, JobPositionByIdTransform);
