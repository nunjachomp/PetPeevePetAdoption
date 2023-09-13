import { useContext } from 'react'
import { AuthContext } from '../Context/AuthContext'
import { Navigate } from 'react-router-dom'
import './PrivateRoute.css'

const PrivateRoute = ({children}) => {
  const { user, isUserLoading } = useContext(AuthContext)

  if(isUserLoading) {
    return <h1 className='loading'>Loading....</h1>
  }
  
  return (
    <div>{user ? children : <Navigate to='/'/>}</div>
  )
}

export default PrivateRoute;