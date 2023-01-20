import cookie from 'react-cookies';

export function useToken() {
  const setToken = (token: string) => {
    cookie.save('token', token, {});
  };

  const hasToken = () => {
    return cookie.load('token') !== undefined;
  };

  return {
    setToken,
    hasToken,
  };
}
