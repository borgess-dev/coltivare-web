import { LoginRequest } from './LoginRequest';

export type AuthenticationContextType = {
  accessToken: string | null;
  refreshToken: string | null;
  // eslint-disable-next-line no-unused-vars
  login: (credentials: LoginRequest) => Promise<void>;
  logout: () => void;
};
