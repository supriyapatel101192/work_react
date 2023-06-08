import { FilterJobsResult } from './job-board/list-jobs/list-jobs.types';

export type ParamOption = {
  search?: string;
  userType?: string;
  requestType: string;
  token?: string;
  isPublic?: string;
  pageNext?: string;
  filterTp?: FilterJobsResult;
  metaCode?: string;
};
export type ErrorAction = {
  failed: boolean;
  backend: string;
  errorMessage: string;
};
