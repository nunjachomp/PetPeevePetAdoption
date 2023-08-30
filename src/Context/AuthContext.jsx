import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState('');
  const [isUserLoading, setIsUserLoading] = useState(true);

  useEffect(() => {
    checkStatus();
  }, []);

 const checkStatus = async () => {
    try {
      setIsUserLoading(true);
      const res = await axios.get(`${process.env.REACT_APP_SERVER_URL}/users/check-status`, { withCredentials: true });
      setUser(res.data.userId);
      setIsUserLoading(false);
    } catch (err) {
      console.log(err);
      setIsUserLoading(false);
    }
  };

  return <AuthContext.Provider value={{ user, setUser, checkStatus, isUserLoading }}>{children}</AuthContext.Provider>;
};

export { AuthContext };
export default AuthContextProvider;
