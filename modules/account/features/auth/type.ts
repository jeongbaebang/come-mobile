import { AccessToken, RefreshToken } from '@account/api/v1/type';

export type UserToken = {
  accessToken: AccessToken;
  refreshToken: RefreshToken;
};

export type LoginStatus = {
  apple: boolean;
  google: boolean;
};

export interface AuthState {
  userToken: UserToken | null;
  isLoading: LoginStatus;
  isReissue: boolean;
  isError: boolean;
}