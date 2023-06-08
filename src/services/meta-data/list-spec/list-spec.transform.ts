import { ListSpecResponse, ListSpecResults } from './list-spec.service.types';
import { SpecResult, SpecResultInfo } from './list-spec.types';

const AppTransform: (input: SpecResult) => SpecResultInfo = (spec) => ({
  id: spec.id,
  courseName: spec.courseName,
});
export const ListSpecTransform: (response: ListSpecResponse) => ListSpecResults = (listSpecResults) => {
  const { data, is_error } = listSpecResults;
  const result: ListSpecResults = {
    count: 0,
    isNext: false,
    isPrev: false,
    nextPage: 0,
    prevPage: 0,
    pages: 0,
    specData: [],
    specInfo: [],
    isError: false,
  };
  if (is_error) {
    result.isError = is_error;
  } else {
    result.specData = data.results;
    result.specInfo = data.results.map((spec: SpecResult) => AppTransform(spec));
  }
  return result;
};
