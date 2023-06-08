export const setTokenToLocalStorage = (token: string) => {
  localStorage.setItem('token', token);
};

export const getTokenFromLocalStorage = () => localStorage.getItem('token') || '';

export const clearKeysFromLocalStorage = () => {
  localStorage.clear();
};

export const setTokenSessionStorage = (token: string) => {
  sessionStorage.setItem('token', token);
};

export const clearKeysFromSessionStorage = () => {
  sessionStorage.clear();
};
