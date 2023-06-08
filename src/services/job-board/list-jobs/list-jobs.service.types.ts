import { Service } from '../../service.types';
import { ParamOption } from '../../types';
import { ListJobsResult, ListJobsTransportType } from './list-jobs.types';

export type ListJobsOptions = {} & ParamOption;
export type ListJobsResponse = ListJobsTransportType;
export type ListJobsResults = ListJobsResult;

export type ListJobsService = Service<ListJobsOptions, ListJobsResult>;
