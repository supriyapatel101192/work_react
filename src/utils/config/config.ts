import { StaticConfig } from './config-type';

export const getConfig: () => StaticConfig = () => ({
  USERNAME: process.env.REACT_APP_USERNAME || '',
  PASSWORD: process.env.REACT_APP_PASSWORD || '',
  CAND_USERNAME: process.env.REACT_APP_CAND_USERNAME || '',
  CAND_PASSWORD: process.env.REACT_APP_CAND_PASSWORD || '',
  WENEX_API_ROOT: process.env.REACT_APP_WENEX_API_ROOT || '',
  WENEX_API_VERSION: parseInt(process.env.REACT_APP_WENEX_API_VERSION || '1', 10),
  REGION: process.env.REACT_APP_AWS_REGION || '',
  USER_POOL_ID: process.env.REACT_APP_AWS_USER_POOL_ID || '',
  USER_POOL_WEB_CLIENT_ID: process.env.REACT_APP_AWS_USER_POOL_WEB_CLIENT_ID || '',
});
