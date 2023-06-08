import { Service } from '../service.types';
import { ParamOption } from '../types';
import { ForgotPasswordResult, ForgotPasswordTransportType } from './forgot-password.types';

export type ForgotPasswordOptions = {userName: string} & ParamOption;
export type ForgotPasswordResponse = ForgotPasswordTransportType;

export type ForgotPasswordResults = ForgotPasswordResult;

export type ForgotPasswordService = Service<ForgotPasswordOptions, ForgotPasswordResult>;
