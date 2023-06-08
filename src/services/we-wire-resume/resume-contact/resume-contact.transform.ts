import { ResumeContactResponse, ResumeContactResults } from './resume-contact.service.types';

export const ResumeContactTransform: (response: ResumeContactResponse) => ResumeContactResults = (resumeContactResults) => {
  const { data, is_error } = resumeContactResults;
  const result: ResumeContactResults = {
    message: '',
    error: false,
    errorMessage: '',
  };
  if (is_error) {
    result.error = is_error;
    result.errorMessage = 'Backend Issue';
  } else {
    result.message = data.message;
  }
  return result;
};
