import { Service } from '../../service.types';
import { ParamOption } from '../../types';
import { JobPositionByIdResult, JobPositionByIdTransportType } from './job-position-by-id.types';

export type JobPositionByIdOptions = {id: string} & ParamOption;
export type JobPositionByIdResponse = JobPositionByIdTransportType;

export type JobPositionByIdResults = JobPositionByIdResult;

export type JobPositionByIdService = Service<JobPositionByIdOptions, JobPositionByIdResult>;
