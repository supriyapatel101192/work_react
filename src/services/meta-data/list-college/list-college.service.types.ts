import { Service } from '../../service.types';
import { ParamOption } from '../../types';
import { ListCollegeResult, ListCollegeTransportType } from './list-college.types';

export type ListCollegeOptions = {} & ParamOption;
export type ListCollegeResponse = ListCollegeTransportType;
export type ListCollegeResults = ListCollegeResult;

export type ListCollegeService = Service<ListCollegeOptions, ListCollegeResult>;
