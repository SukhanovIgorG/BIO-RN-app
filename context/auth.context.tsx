import { logout, refreshToken } from "@/services/auth.service";
import { getAccessToken } from "@/services/token.service";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

type AuthContextType = {
  isAuthenticated: boolean;
  setAuthenticated: (value: boolean) => void;
};

const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  setAuthenticated: () => {},
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      const token = await getAccessToken();

      if (!token) {
        const refreshed = await refreshToken();
        if (refreshed) {
          setAuthenticated(true);
        } else {
          await logout();
          setAuthenticated(false);
        }
      } else {
        setAuthenticated(true);
      }
    };

    checkAuth();
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, setAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
