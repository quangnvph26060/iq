import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);
  const [isAuthReady, setIsAuthReady] = useState(false); 

  useEffect(() => {
    const savedToken = localStorage.getItem('accessToken');
// const savedUser = localStorage.getItem('user');

    if (savedToken) {
      setToken(savedToken);
      try {
       // setUser(JSON.parse(savedUser));
      } catch (e) {
        console.error('Invalid user JSON:', e);
      //  localStorage.removeItem('user');
      }
    }

    setIsAuthReady(true); 
  }, []);

  const login = (token, user) => {
    localStorage.setItem('accessToken', token);
   // localStorage.setItem('user', JSON.stringify(user));
    setToken(token);
  //  setUser(user);
  };

  const logout = () => {
    localStorage.removeItem('accessToken');
  //  localStorage.removeItem('user');
    setToken(null);
  //  setUser(null);
  };

  return (
    <AuthContext.Provider value={{ token, login, logout, isAuthReady }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
