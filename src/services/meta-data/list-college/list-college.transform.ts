import { ListCollegeResponse, ListCollegeResults } from './list-college.service.types';
import { CollegeResult, CollegeResultInfo } from './list-college.types';

const AppTransform: (input: CollegeResult) => CollegeResultInfo = (college) => ({
  id: college.id,
  collegeName: college.collegeName,
});
export const ListCollegeTransform: (response: ListCollegeResponse) => ListCollegeResults = (listCollegeResults) => {
  const { data, is_error } = listCollegeResults;
  const result: ListCollegeResults = {
    count: 0,
    isNext: false,
    isPrev: false,
    nextPage: 0,
    prevPage: 0,
    pages: 0,
    collegeData: [],
    collegeInfo: [],
    isError: false,
  };
  if (is_error) {
    result.isError = is_error;
  } else {
    result.collegeData = data.results;
    result.collegeInfo = data.results.map((college: CollegeResult) => AppTransform(college));
  }
  return result;
};
