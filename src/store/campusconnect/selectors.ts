import { RegisterFrsResults } from '../../services/register-fresher/register-fresher.service.types';
import { CCAppState } from './action.types';

export const getData = (state: CCAppState): string => state.data.show;
export const getRegisterFrsResponse = (state: CCAppState): RegisterFrsResults => state.registerUser;
