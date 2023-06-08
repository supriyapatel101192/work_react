import { RegisterResults } from '../../services/register/register.service.types';
import { WeWireAppState } from './action.types';

export const WWRegisterResponse = (state: WeWireAppState): RegisterResults => state.wwRegister;
