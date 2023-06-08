import { ForgotPasswordResponse, ForgotPasswordResults } from './forgot-password.service.types';

export const ForgotPasswordTransform: (response: ForgotPasswordResponse) => ForgotPasswordResults = (genTokenResults) => {
  const { data, is_error } = genTokenResults;
  const result: ForgotPasswordResults = {
    forgotPasswordData: '',
    errorMessage: '',
  };
  if (is_error) {
    result.errorMessage = 'Mail Sent unsuccessful';
  } else {
    result.forgotPasswordData = data;
  }
  return result;
};
