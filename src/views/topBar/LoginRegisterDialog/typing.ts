export type UserFormData = {
  account: string;
  password: string;
  name?: string;
};

export type LoginResult = {
  token: string;
};
