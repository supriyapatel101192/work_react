import { createAction } from 'typesafe-actions';
import {
  API_ERROR, CLEAR_REGISTER_FRESHER_DATA, REGISTER_FRESHER_DATA, SHOW_DATA, UPDATE_DATA, UPDATE_REGISTER_FRESHER_DATA,
} from './constants';
import { RegisterFrsOptions, RegisterFrsResults } from '../../services/register-fresher/register-fresher.service.types';
import { ErrorAction } from '../../services/types';

export const apiError = createAction(API_ERROR)<ErrorAction>();
export const showData = createAction(SHOW_DATA)<{}>();
export const updateData = createAction(UPDATE_DATA)<string>();
export const registerFrsPostReq = createAction(REGISTER_FRESHER_DATA)<RegisterFrsOptions>();
export const updateRegisterFrsPostReq = createAction(UPDATE_REGISTER_FRESHER_DATA)<RegisterFrsResults>();
export const clearRegisterFrsPostReq = createAction(CLEAR_REGISTER_FRESHER_DATA)();
