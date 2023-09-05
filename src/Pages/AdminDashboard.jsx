import axios from 'axios'
import React from 'react'

export const AdminDashboard = () => {

    // const getAllUsers = async () => {
    //     // await axios.get('http://localuser:8080/users')

    // }
    const toggleAdmin = async ()=> {
        await axios.put("http://localhost:8080/users/toggleadmin", { id:1 }, {withCredentials: true})
    }


  return (
    <>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <div>AdminDashboard</div>
    <button onClick={()=>toggleAdmin(2)}>Make Admin</button>
    </>
  )
}

export default AdminDashboard