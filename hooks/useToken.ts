import cookie from 'react-cookies';

export function useToken() {
  const setToken = (token: string) => {
    cookie.save('token', token, {});
  };

  const hasToken = () => {
    return cookie.load('token') !== undefined;
  };

  const getToken = () => cookie.load('token');

  const removeToken = () => cookie.remove('token');

  return {
    setToken,
    hasToken,
    getToken,
    removeToken,
  };
}
