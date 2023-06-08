import { Service } from '../service.types';
import { ParamOption } from '../types';

import {
  RegisterFrsInput, RegisterFrsResult, RegisterFrsTransportType,
} from './register-fresher.types';

export type RegisterFrsOptions = { inputBody:RegisterFrsInput, fileUpload:string } & ParamOption;

export type RegisterFrsResponse = RegisterFrsTransportType;

export type RegisterFrsResults = RegisterFrsResult;

export type RegisterFrsService = Service<RegisterFrsOptions, RegisterFrsResult>;
