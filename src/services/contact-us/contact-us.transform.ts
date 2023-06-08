import { ContactUsResponse, ContactUsResults } from './contact-us.service.types';

export const ContactUsTransform: (response: ContactUsResponse) => ContactUsResults = (contactUsResults) => {
  const { data, is_error } = contactUsResults;
  const result: ContactUsResults = {
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
