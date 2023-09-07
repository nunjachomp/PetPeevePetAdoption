import React, { useContext, useState, useEffect } from 'react'
import axios from 'axios';
import './MyPets.css'
import { AuthContext } from '../Context/AuthContext';
import { PetsContext } from '../Context/PetContextProvider';

const MyPets = () => {
  const { petsList, fetchAllPets } = useContext(PetsContext)
  const { user } = useContext(AuthContext)
  // console.log(petsList)
  // console.log(user)
  
  useEffect(() => {
    fetchAllPets()
  }, [])

  const userPets = petsList.filter((pet) => {
    // console.log(pet.adoptedById);
    const test = (pet.adoptedById == user);
    // console.log(test)
    return pet.adoptedById == user;
  });
  

  //Need help from SinglePet
  const handleUnAdopt = async (petId) => {
    try {
      const response = await axios.put(`${process.env.REACT_APP_SERVER_URL}/pets/${petId}`, { adoptedById: null });
      console.log(response.data);
      fetchAllPets();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
    {/* {console.log(userPets)} */}
    <div className='test'>My Pets: {userPets.map((pet) => (<div key={pet.id}>{pet.name} <button onClick={() => handleUnAdopt(pet.id)}>UnAdopt</button></div>))}</div>
    </>
  )
}

export default MyPets