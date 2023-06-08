import { Service } from '../../service.types';
import { ParamOption } from '../../types';
import { ListSpecResult, ListSpecTransportType } from './list-spec.types';

export type ListSpecOptions = {} & ParamOption;
export type ListSpecResponse = ListSpecTransportType;
export type ListSpecResults = ListSpecResult;

export type ListSpecService = Service<ListSpecOptions, ListSpecResult>;
