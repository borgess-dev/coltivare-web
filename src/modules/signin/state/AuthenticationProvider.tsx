import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router";
import coltivareApi from "../../core/api/coltivateApi";
import { LoginRequest } from "../types/LoginRequest";
import { AuthenticationProviderPropTypes } from "../types/AuthenticationProviderPropTypes";
import { AuthenticationContextType } from "../types/AuthenticationContextType";
import { LoginResponse } from "../types/LoginReponse";

const AuthenticationContext = createContext<AuthenticationContextType | null>(null);

const AuthenticationProvider = ({ children }: AuthenticationProviderPropTypes) => {
  const [accessToken, setAccessToken] = useState(localStorage.getItem('accessToken'));
  const [refreshToken, setRefreshToken] = useState(localStorage.getItem('refreshToken'));
  const navigate = useNavigate();

  const login = async (credentials: LoginRequest) => {
    const response = await coltivareApi.post<LoginResponse>('/v1/auth/signin', {
      login: credentials.login,
      password: credentials.password
    });

    if(response.data){
      setAccessToken(response.data.accessToken);
      setRefreshToken(response.data.refreshToken);
      localStorage.setItem('accessToken', response.data.accessToken);
      localStorage.setItem('refreshToken', response.data.refreshToken);
      navigate("/mapa");
    }
  };

  const logout = () => {
    setAccessToken(null);
    setRefreshToken(null);
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    navigate("auth/signin");
  };

  return (
    <AuthenticationContext.Provider value={{ accessToken, refreshToken, login, logout }}>
      {children}
    </AuthenticationContext.Provider>
  );
};

export default AuthenticationProvider;

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  return useContext(AuthenticationContext);
};