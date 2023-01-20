export interface Signin {
  id: string;
  password: string;
}

export interface SigninResponse {
  result: string;
  token: string;
}
