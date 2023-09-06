// import { useContext } from 'react'
// import { AuthContext } from '../Context/AuthContext'
// import { Navigate } from 'react-router-dom'

// const PrivateRouteAdmin = ({children}) => {
//   const {user, isUserLoading, usersList} = useContext(AuthContext)
 
//   const mappedUsers = usersList.map((user) => (
//     <div>key={user.Id} user={user}</div>))


//   if(isUserLoading) {
//     return <h1>Loading....</h1>
//   }
  
//   return (
//     <div>{user.isAdmin === 1 ? children : <Navigate to='/FORBIDDEN'/>}</div>
//   )
// }

// export default PrivateRouteAdmin;
