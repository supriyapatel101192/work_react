import { Service } from '../service.types';
import { ParamOption } from '../types';
import { ProfileResult, ProfileTransportType } from './get-profile.types';

export type ProfileOptions = {} & ParamOption;
export type ProfileResponse = ProfileTransportType;

export type ProfileResults = ProfileResult;

export type ProfileService = Service<ProfileOptions, ProfileResult>;
