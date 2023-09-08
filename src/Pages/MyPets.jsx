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
    return pet.adoptedById == user || pet.fosteredById == user;
  });

  const handleUnAdopt = async (petId) => {
    let res;
    try {
      res = await axios.put(`${process.env.REACT_APP_SERVER_URL}/pets/${petId}/adopt`, { adopt: false }, { withCredentials: true });
      console.log('Pet Unadopted Successfully');
    } catch (err) {
      console.log(err);
    }
  };

  const handleFoster = async (petId) => {
    let res;
    try {
      res = await axios.put(`${process.env.REACT_APP_SERVER_URL}/pets/${petId}/foster`, { foster: true }, { withCredentials: true });
      console.log('Pet Fostered Successfully');
    } catch (err) {
      console.log(err);
    }
  };

  const handleUnFoster = async (petId) => {
    let res;
    try {
      res = await axios.put(`${process.env.REACT_APP_SERVER_URL}/pets/${petId}/foster`, { foster: false }, { withCredentials: true });
      console.log('Pet Unfostered Successfully');
    } catch (err) {
      console.log(err);
    }
  };
  
  return (
    <>
    <div className='test'>My Pets: {userPets.map((pet) => (<div key={pet.id}>{pet.name} <button onClick={() => handleUnAdopt(pet.id)}>UnAdopt</button><button onClick={() => handleFoster(pet.id)}>Foster</button><button onClick={() => handleUnFoster(pet.id)}>Unfoster</button></div>))}</div>
    </>
  )
}

export default MyPets