import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState('');
  const [isUserLoading, setIsUserLoading] = useState(true);

  const [usersList, setUsersList] = useState([]);

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

  const showAllUsers = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/users/`,
        { withCredentials: true }
      );
      setUsersList(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return <AuthContext.Provider value={{ user, setUser, checkStatus, isUserLoading, showAllUsers, usersList, setUsersList }}>{children}</AuthContext.Provider>;
};

export { AuthContext };
export default AuthContextProvider;
