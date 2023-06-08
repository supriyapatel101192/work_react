import { Service } from '../service.types';
import { ParamOption } from '../types';

import { RegisterInput, RegisterResult, RegisterTransportType } from './register.types';

export type RegisterOptions = { inputBody: RegisterInput, fileUpload: string } & ParamOption;

export type RegisterResponse = RegisterTransportType;

export type RegisterResults = RegisterResult;

export type RegisterService = Service<RegisterOptions, RegisterResult>;
