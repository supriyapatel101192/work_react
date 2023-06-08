import { postJSON } from '../../../utils';
import { getConfig } from '../../../utils/config/config';
import { ResumeContactOptions, ResumeContactResponse } from './resume-contact.service.types';

const { WENEX_API_ROOT } = getConfig();

export const ResumeContactPostRequest = ({ inputBody, candidateId, requestType }: ResumeContactOptions): Promise<ResumeContactResponse> => postJSON(`${WENEX_API_ROOT}?candidateId=${candidateId}`, '', requestType, inputBody as unknown as BodyInit);
