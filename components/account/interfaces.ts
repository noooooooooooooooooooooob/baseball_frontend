export interface Account {
  id: string;
  password: string;
  team?: string;
}

export interface SigninResponse {
  result: {
    token: string;
  };
  message: string;
}
