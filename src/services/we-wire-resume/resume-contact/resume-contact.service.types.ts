import { Service } from '../../service.types';
import { ParamOption } from '../../types';
import { ResumeContactInput, ResumeContactTransportType, ResumeContactResult } from '../we-wire-resume.types';

export type ResumeContactOptions = { inputBody: ResumeContactInput, candidateId: string } & ParamOption;

export type ResumeContactResponse = ResumeContactTransportType;

export type ResumeContactResults = ResumeContactResult;

export type ResumeContactService = Service<ResumeContactOptions, ResumeContactResult>;
