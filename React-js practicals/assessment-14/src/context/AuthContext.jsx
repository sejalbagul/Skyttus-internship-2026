import { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const storedAuth = localStorage.getItem('auth') === 'true';
  const storedRole = localStorage.getItem('role') || null;

  const [isAuthenticated, setIsAuthenticated] = useState(storedAuth);
  const [role, setRole] = useState(storedRole);

  const login = (userRole) => {
    localStorage.setItem('auth', 'true');
    localStorage.setItem('role', userRole);
    setIsAuthenticated(true);
    setRole(userRole);
  };

  const logout = () => {
    localStorage.removeItem('auth');
    localStorage.removeItem('role');
    setIsAuthenticated(false);
    setRole(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, role, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};