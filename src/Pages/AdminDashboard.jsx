import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import "./AdminDashboard.css";
// import { AuthContext } from "../Context/AuthContext";

export const AdminDashboard = () => {

  // const {showAllUsers, usersList} = useContext(AuthContext)

  const [usersList, setUsersList] = useState([]);
  const [rerender, setRender] = useState("");

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

  useEffect(() => {
    showAllUsers();
  }, [rerender]);

  const toggleAdmin = async (id) => {
    await axios.put(
      `${process.env.REACT_APP_SERVER_URL}/users/toggleadmin`,
      { id },
      { withCredentials: true }
    );
    setRender(!rerender);
  };

  return (
    <>
      <div className="adminDashboardContainer">
        {/* Need to return confirmation to client */}
        <h1 className="adminTitle">Admin Dashboard</h1>
        <div className="displayAllUsersAdmin">
          {usersList.length > 0 ? (
            usersList.map((user) => (
              <div key={user.id}>
                <div class="grid">
                  <div class="column userName">{user.name}</div>
                  <div class="column userEmail">{user.email}</div>
                  <div class="column userSince">{user.createdDate}</div>
                  <div class="column isAdmin">{user.isAdmin}</div>
                  <div class="column toggleButton">
                    <button className="powerUpButton" onClick={() => toggleAdmin(user.id)}>Make Admin</button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div>Loading...</div>
          )}
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
