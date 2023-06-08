import { RegisterFrsResults } from '../../services/register-fresher/register-fresher.service.types';
import { LoginTokenResults } from '../../services/login/login-token.service.types';

export type CCAppState = {
    readonly data: {
        show: string;
    }
    readonly registerUser: RegisterFrsResults;
    readonly tokenData: LoginTokenResults;
}
