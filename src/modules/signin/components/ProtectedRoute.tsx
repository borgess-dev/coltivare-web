import { Navigate, Outlet } from "react-router";
import { useAuth } from "../state/AuthenticationProvider";

const ProtectedRoute = () => {
  const credentials = useAuth();

  if(credentials?.accessToken){
    return (<Navigate to='/map'/>);
  }

  return <Outlet/>;
};

export default ProtectedRoute;