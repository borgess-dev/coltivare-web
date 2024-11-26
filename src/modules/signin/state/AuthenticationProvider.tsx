import { createContext, useContext, useState } from "react";
import useLocalStorage from "../../core/hooks/useLocalStorage";
import { useNavigate } from "react-router";
import coltivareApi from "../../core/api/coltivateApi";
import { LoginRequest } from "../types/LoginRequest";
import { AuthenticationProviderPropTypes } from "../types/AuthenticationProviderPropTypes";
import { AuthenticationContextType } from "../types/AuthenticationContextType";

const AuthenticationContext = createContext<AuthenticationContextType | null>(null);

const AuthenticationProvider = ({ children }: AuthenticationProviderPropTypes) => {
    const [storedAccessToken, storeAccessToken] = useLocalStorage('accessToken');
    const [accessToken, setAccessToken] = useState(localStorage.getItem('accessToken'));
    const [refreshToken, setRefreshToken] = useState(localStorage.getItem('refreshToken'));
    const navigate = useNavigate();

    const login = async (credentials: LoginRequest) => {
        const response = await coltivareApi.post("http://localhost:8080/v1/auth/signin", {
            identifier: credentials.login,
            password: credentials.password
        })

        if(response.data){
            storeAccessToken(response.data.accessToken);
            setAccessToken(response.data.accessToken);
            setRefreshToken(response.data.refreshToken);
            localStorage.setItem('accessToken', response.data.accessToken);
            localStorage.setItem('refresgToken', response.data.refreshToken);
            navigate("/mapa");
        }
    }

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
}

export default AuthenticationProvider;

export const useAuth = () => {
  return useContext(AuthenticationContext);
};