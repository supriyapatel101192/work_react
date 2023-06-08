import { getConfig } from '../config/config';

const {
  USERNAME, PASSWORD, CAND_USERNAME, CAND_PASSWORD,
} = getConfig();

// const getRequestType = 'get_all_job_positions';

export const getToken = async (url: RequestInfo, requestType: string) => {
  const headers = {
    'Request-Type': requestType,
    Authorization: `Basic ${btoa(`${USERNAME}:${PASSWORD}`)}`,
  };
  const response = await fetch(url, { headers });
  const data = await response.json();
  return data;
};
const requestOptions = (method: string, token: string, requestType: string, body?: BodyInit) => ({
  method,
  headers: {
    'token-data': token,
    'Request-Type': requestType,
  },
  body: JSON.stringify(body),
});

export const getJSON = async (url: RequestInfo, token: string, requestType: string) => {
  const response = await fetch(url, requestOptions('GET', token, requestType));
  const data = await response.json();
  return data;
};
export const postJSON = async (url: RequestInfo, token: string, requestType: string, body: BodyInit) => {
  const response = await fetch(url, requestOptions('POST', token, requestType, body));
  const data = await response.json();
  return data;
};
export const putJSON = async (url: RequestInfo, token: string, requestType: string, body: BodyInit) => {
  const response = await fetch(url, requestOptions('PUT', token, requestType, body));
  const data = await response.json();
  return data;
};
export const getLogin = async (url: RequestInfo, requestType: string, userName: string, passKey: string) => {
  const headers = {
    'Request-Type': requestType,
    Authorization: `Basic ${btoa(`${userName}:${passKey}`)}`,
  };
  const response = await fetch(url, { headers });
  const data = await response.json();
  return data;
};

export const getPublicJSON = async (url: RequestInfo, requestType: string) => {
  const headers = {
    'Request-Type': requestType,
    Authorization: `Basic ${btoa(`${USERNAME}:${PASSWORD}`)}`,
  };
  const response = await fetch(url, { headers });
  const data = await response.json();
  return data;
};

const requestOptionsPublicFile = (method: string, requestType: string, formdata: any) => ({
  method,
  headers: {
    'Request-Type': requestType,
    Authorization: `Basic ${btoa(`${CAND_USERNAME}:${CAND_PASSWORD}`)}`,
  },
  body: formdata,
});

export const postPublicFileData = async (url: RequestInfo, requestType: string, fileUpload:string, body: BodyInit) => {
  const formData = new FormData();
  formData.append('data', JSON.stringify(body));
  formData.append('files', fileUpload);
  const response = await fetch(url, requestOptionsPublicFile('POST', requestType, formData));
  const data = await response.json();
  return data;
};

export const putCommonApi = async (url: RequestInfo, requestType: string) => {
  const headers = {
    'Request-Type': requestType,
  };
  const response = await fetch(url, { method: 'PUT', headers });
  const data = await response.json();
  return data;
};

export const getCommonApi = async (url: RequestInfo, requestType: string) => {
  const headers = {
    'Request-Type': requestType,
  };
  const response = await fetch(url, { method: 'GET', headers });
  const data = await response.json();
  return data;
};

export const getCommonApiToken = async (url: RequestInfo, requestType: string, token: any) => {
  const headers = {
    'Request-Type': requestType,
    'token-data': token,
  };
  const response = await fetch(url, { method: 'GET', headers });
  const data = await response.json();
  return data;
};
