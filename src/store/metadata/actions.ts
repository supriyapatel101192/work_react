import { createAction } from 'typesafe-actions';
import { GenTokenOptions, GenTokenResults } from '../../services/gen-token/gen-token.service.types';
import { ListCollegeOptions, ListCollegeResults } from '../../services/meta-data/list-college/list-college.service.types';
import { ListSpecOptions, ListSpecResults } from '../../services/meta-data/list-spec/list-spec.service.types';
import { ErrorAction } from '../../services/types';
import {
  API_ERROR, GET_ALL_COLLEGE, GET_ALL_SPEC, GET_TOKEN, UPDATE_ALL_COLLEGE, UPDATE_ALL_SPEC, UPDATE_TOKEN,
} from './constants';

export const apiError = createAction(API_ERROR)<ErrorAction>();
export const getToken = createAction(GET_TOKEN)<GenTokenOptions>();
export const updateToken = createAction(UPDATE_TOKEN)<GenTokenResults>();
export const getAllCollege = createAction(GET_ALL_COLLEGE)<ListCollegeOptions>();
export const updateAllCollege = createAction(UPDATE_ALL_COLLEGE)<ListCollegeResults>();
export const getAllSpec = createAction(GET_ALL_SPEC)<ListSpecOptions>();
export const updateAllSpec = createAction(UPDATE_ALL_SPEC)<ListSpecResults>();
