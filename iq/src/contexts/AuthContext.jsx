import React, { createContext, useContext, useState, useEffect } from 'react';

// 1. Tạo context
const AuthContext = createContext();

// 2. Provider để bọc App
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);


  useEffect(() => {
    const savedToken = localStorage.getItem('accessToken');
    const savedUser = localStorage.getItem('user');

    if (savedToken) {
      setToken(savedToken);
      try {
        setUser(JSON.parse(savedUser));
      } catch (e) {
        console.error('Invalid user JSON:', e);
      }
    }
  }, []);

  // const login = (userData, token) => {
  //   setUser(userData);
  //   localStorage.setItem('accessToken', token);
  //   localStorage.setItem('user', JSON.stringify(token));
  // };
  const login = (token) => {
    localStorage.setItem('accessToken', token);
    setToken(token);
  };
  const logout = () => {
    setUser(null);
    localStorage.removeItem('accessToken');
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// 3. Hook tiện để dùng trong component
export const useAuth = () => useContext(AuthContext);
