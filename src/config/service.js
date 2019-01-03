import Global from './Global';

export const getToken = () => {
  return localStorage.getItem(Global.AUTH_TOKEN);
};