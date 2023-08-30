import { useContext } from 'react'
import { AuthContext } from '../Context/AuthContext'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({children}) => {
  const { user, isUserLoading } = useContext(AuthContext)

  if(isUserLoading) {
    return <h1>Loading....</h1>
  }
  
  return (
    <div>{user ? children : <Navigate to='/'/>}</div>
  )
}

export default PrivateRoute;