import { Service } from '../service.types';
import { ParamOption } from '../types';

import { GenTokenResult, GenTokenTransportType } from './gen-token.types';

export type GenTokenOptions = {} & ParamOption;
export type GenTokenResponse = GenTokenTransportType;

export type GenTokenResults = GenTokenResult;

export type GenTokenService = Service<GenTokenOptions, GenTokenResult>;
