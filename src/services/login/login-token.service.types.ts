import { Service } from '../service.types';
import { ParamOption } from '../types';

import { LoginTokenResult, LoginTokenTransportType } from './login-token.types';

export type LoginOptions = { userName: string, passKey: string } & ParamOption;
export type LoginTokenResponse = LoginTokenTransportType;

export type LoginTokenResults = LoginTokenResult;

export type LoginService = Service<LoginOptions, LoginTokenResults>;
