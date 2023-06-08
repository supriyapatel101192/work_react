import { createAction } from 'typesafe-actions';
import {
  API_ERROR, CLEAR_REGISTER_DATA, CLEAR_RESUME_CONTACT_DATA, REGISTER_DATA, RESUME_CONTACT_DATA, UPDATE_REGISTER_DATA, UPDATE_RESUME_CONTACT_DATA,
} from './constants';
import { ErrorAction } from '../../services/types';
import { RegisterOptions, RegisterResults } from '../../services/register/register.service.types';
import { ResumeContactOptions, ResumeContactResults } from '../../services/we-wire-resume/resume-contact/resume-contact.service.types';

export const apiError = createAction(API_ERROR)<ErrorAction>();
export const registerPostReq = createAction(REGISTER_DATA)<RegisterOptions>();
export const updateRegisterPostReq = createAction(UPDATE_REGISTER_DATA)<RegisterResults>();
export const clearRegisterPostReq = createAction(CLEAR_REGISTER_DATA)();
export const resumeContactPutReq = createAction(RESUME_CONTACT_DATA)<ResumeContactOptions>();
export const updateResumeContactPutReq = createAction(UPDATE_RESUME_CONTACT_DATA)<ResumeContactResults>();
export const clearResumeContactPutReq = createAction(CLEAR_RESUME_CONTACT_DATA);
