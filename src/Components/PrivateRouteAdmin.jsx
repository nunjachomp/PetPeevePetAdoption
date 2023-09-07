import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";

const PrivateRouteAdmin = ({ render }) => {
  const { user, isUserLoading, showAllUsers, usersList } = useContext(AuthContext);

  console.log("Current userId: ", user); // displays: 1
  const loggedInUserId = user;

  useEffect(() => {
    showAllUsers();
  }, []);

  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    usersList.forEach((user) => {
      console.log("UserId: ", user.id, "Is Admin?", user.isAdmin); // displays 1 and 0 for each user
      if (loggedInUserId === user.id) 
      setIsAdmin(user.isAdmin === 1 ? 1 : 0);
    });
  }, []);

  if (isUserLoading) {
    return <h1>Loading....</h1>;
  }

  return (
    <>
      <div>{render(isAdmin)}</div>
    </>
  );
};

export default PrivateRouteAdmin;
