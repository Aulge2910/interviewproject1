"use client";

import { createContext, useContext, useState, useEffect } from "react";

interface AuthContextType {
  isLoggedIn: boolean;
  user: { name: string; email: string } | null;
  login: (userData: { name: string; email: string }) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<{ name: string; email: string } | null>(
    null,
  );

  // 💡 重点：页面一加载，先去“储物柜”看看有没有存好的状态
  useEffect(() => {
    const savedStatus = localStorage.getItem("isLoggedIn");
    const savedUserStr = localStorage.getItem("user");
    if (savedStatus === "true" && savedUserStr) {
      try {
        // use try catch to parse json
        const userData = JSON.parse(savedUserStr);

        // set value if sucess
        setIsLoggedIn(true);
        setUser(userData);

      } catch (error) {
        // if error, clear the local storage
        localStorage.removeItem("user");
        localStorage.removeItem("isLoggedIn");
        setIsLoggedIn(false);
        setUser(null);
      }
    }
  }, []);
  const login = (userData: { name: string; email: string }) => {
    setIsLoggedIn(true);
    setUser(userData);
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("user", JSON.stringify(userData));
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUser(null);
    localStorage.clear();
    window.location.reload(); // reload the page
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};
