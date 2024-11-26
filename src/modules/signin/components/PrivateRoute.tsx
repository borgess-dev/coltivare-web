import { Navigate, Outlet } from 'react-router';
import { useAuth } from '../state/AuthenticationProvider';

const PrivateRoute = () => {
  const credentials = useAuth();

  if (!credentials.accessToken)
    return <Navigate to="auth/signin" />;
  return <Outlet />;
};

export default PrivateRoute;