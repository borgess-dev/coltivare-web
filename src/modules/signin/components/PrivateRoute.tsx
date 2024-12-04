import { Navigate, Outlet } from 'react-router';
import { useAuth } from '../state/AuthenticationProvider';
import * as jose from 'jose';

const PrivateRoute = () => {
  const credentials = useAuth();
  const isAccessTokenExpired = jose.decodeJwt(credentials?.accessToken).exp < (new Date().getTime() + 1) / 1000;
  const isRefreshTokenExpired = jose.decodeJwt(credentials?.refreshToken).exp < (new Date().getTime() + 1) / 1000;

  if (!credentials?.accessToken || isRefreshTokenExpired){
    return <Navigate to='auth/signin' />;
  }
  else if(isAccessTokenExpired){
    credentials.refresh(localStorage.getItem('refreshToken'));
  }
  return <Outlet />;
};

export default PrivateRoute;
