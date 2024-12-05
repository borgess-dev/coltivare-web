import { Navigate, Outlet } from 'react-router';
import { useAuth } from '../state/AuthenticationProvider';
import * as jose from 'jose';

const PrivateRoute = () => {
  const credentials = useAuth();
  const isAccessTokenExpired = !credentials?.accessToken ? jose.decodeJwt(credentials?.accessToken).exp < (new Date().getTime() + 1) / 1000 : true;
  const isRefreshTokenExpired = !credentials?.refreshToken ? jose.decodeJwt(credentials?.refreshToken).exp < (new Date().getTime() + 1) / 1000 : true;
  console.log(isAccessTokenExpired);
  console.log(isRefreshTokenExpired);

  if (!credentials?.accessToken || isRefreshTokenExpired){
    return <Navigate to='auth/signin' />;
  }
  else if(isAccessTokenExpired){
    credentials.refresh();
  }
  return <Outlet />;
};

export default PrivateRoute;
