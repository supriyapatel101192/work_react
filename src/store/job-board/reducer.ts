import { ActionType, getType, Reducer } from 'typesafe-actions';
import {
  clearJobPositonById, updateAllJobs, updateJobPositonById, updateToken,
} from './actions';
import * as actions from './actions';
import { JobBoardAppState } from './action.types';

export const initialState: JobBoardAppState = {
  genToken: {
    token: '',
    errorMessage: '',
  },
  listJobs: {
    count: 0,
    isNext: false,
    isPrev: false,
    nextPage: 0,
    prevPage: 0,
    pages: 0,
    jobData: [],
    jobInfo: [],
    isError: false,
    jobMessage: '',
  },
  jobPositionById: {
    isError: false,
    jobData: {
      endDate: '',
      id: '',
      jobLocations: [],
      jobName: '',
      jobNameId: '',
      jobForOrg: {
        key: '',
        value: '',
      },
      jobRating: '',
      jobTitle: '',
      jobTp: {
        key: '',
        value: '',
      },
      updatedByOrg: {
        id: -1,
        value: '',
      },
      logoUrl: '',
      maxExp: 0,
      maxSalary: 0,
      minExp: 0,
      minSalary: 0,
      onlyDisabled: false,
      onlyFemale: false,
      postPublic: false,
      rolesResponsibility: [],
      skillsGoodToHave: [],
      skillsMustHave: [],
      startDate: '',
      updatedAt: '',
      updatedBy: {
        id: -1,
        value: '',
      },
      useLogo: false,
      collegePassoutYear: [],
      collegePreferred: [],
      collegeTier: {
        key: '',
        value: '',
      },
      courseSpecialization: [],
      hireTP: {
        key: '',
        value: '',
      },
      interviewStages: [],
      jobPreference: {
        key: '',
        value: '',
      },
    },
  },
};
export type AllAction = ActionType<typeof actions>;
const jobBoardReducer: Reducer<JobBoardAppState, AllAction> = (state: JobBoardAppState = initialState, action: AllAction): JobBoardAppState => {
  switch (action.type) {
    case getType(updateToken):
      return {
        ...state,
        genToken: {
          token: action.payload.token,
          errorMessage: action.payload.errorMessage,
        },
      };
    case getType(updateAllJobs):
      return {
        ...state,
        listJobs: {
          count: action.payload.count,
          isNext: action.payload.isNext,
          isPrev: action.payload.isPrev,
          nextPage: action.payload.nextPage,
          prevPage: action.payload.prevPage,
          pages: action.payload.pages,
          jobData: action.payload.jobData,
          jobInfo: action.payload.jobInfo,
          jobMessage: 'executed',
          isError: action.payload.isError,
        },
      };
    case getType(updateJobPositonById):
      return {
        ...state,
        jobPositionById: {
          jobData: action.payload.jobData,
          isError: action.payload.isError,
        },
      };
    case getType(clearJobPositonById):
      return {
        ...state,
        jobPositionById: {
          jobData: initialState.jobPositionById.jobData,
          isError: initialState.jobPositionById.isError,
        },
      };
    default:
      return state;
  }
};
export default jobBoardReducer;
