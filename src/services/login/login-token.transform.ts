import { LoginTokenResponse, LoginTokenResults } from './login-token.service.types';

export const LoginTokenTransform: (response: LoginTokenResponse) => LoginTokenResults = (loginTokenResults) => {
  const { data, is_error } = loginTokenResults;
  const result: LoginTokenResults = {
    token: '',
    errorMessage: '',
  };
  if (is_error) {
    result.errorMessage = 'Token Failed to generate';
  } else {
    result.token = data;
  }
  // eslint-disable-next-line no-console
  return result;
};
