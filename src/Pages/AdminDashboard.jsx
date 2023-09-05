import axios from "axios";
import React, {useState, useEffect} from "react";

export const AdminDashboard = () => {
  const [usersList, setUsersList] = useState([])

  const showAllUsers = async () => {
    try {
    const res = await axios.get(`${process.env.REACT_APP_SERVER_URL}/users/`, { withCredentials: true });
    console.log(res.data)
    setUsersList(res.data);
    } catch (err) {
      console.log(err);
    }
  }
  
  useEffect(() => {
    showAllUsers()
  }, [])

  const toggleAdmin = async (id) => {
    await axios.put(`${process.env.REACT_APP_SERVER_URL}/users/toggleadmin`, {id}, { withCredentials: true });
  };

  return (
    <>
      <br /><br /><br /><br /><br />
      <div>AdminDashboard</div>
      {/* Need to return confirmation to client */}
      <br /><br /><br /><br />
      <div>
      {usersList.length > 0 ? (
       usersList.map((user) => <div key={user.id}>{user.name} {user.email} {user.isAdmin}
       <button onClick={() => toggleAdmin(user.id)}>Make Admin</button></div>)
     ) : (
       <div>Loading...</div>
     )}
      </div>
    </>
  );
};

export default AdminDashboard;
