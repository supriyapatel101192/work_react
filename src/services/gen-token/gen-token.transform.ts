import { GenTokenResponse, GenTokenResults } from './gen-token.service.types';

export const GenTokenTransform: (response: GenTokenResponse) => GenTokenResults = (genTokenResults) => {
  const { data, is_error } = genTokenResults;
  const result: GenTokenResults = {
    token: '',
    errorMessage: '',
  };
  if (is_error) {
    result.errorMessage = 'Token Failed to generate';
  } else {
    result.token = data;
  }
  return result;
};
