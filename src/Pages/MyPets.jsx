import React, { useContext, useState, useEffect } from 'react'
import axios from 'axios';
import './MyPets.css'
import { AuthContext } from '../Context/AuthContext';
import { PetsContext } from '../Context/PetContextProvider';

const MyPets = () => {
  const { petsList, fetchAllPets } = useContext(PetsContext)
  const { user } = useContext(AuthContext)
  const [rerender, setRerender] = useState(0);

  useEffect(() => {
    fetchAllPets()
  }, [rerender])

  const userPets = petsList.filter((pet) => {
    const test = (pet.adoptedById == user);
    return pet.adoptedById == user || pet.fosteredById == user;
  });

  const handleUnAdopt = async (petId) => {
    let res;
    try {
      res = await axios.put(`${process.env.REACT_APP_SERVER_URL}/pets/${petId}/adopt`, { adopt: false }, { withCredentials: true });
      console.log('Pet Unadopted Successfully');
      setRerender(Math.random())
    } catch (err) {
      console.log(err);
    }
  };

  const handleFoster = async (petId) => {
    let res;
    try {
      res = await axios.put(`${process.env.REACT_APP_SERVER_URL}/pets/${petId}/foster`, { foster: true }, { withCredentials: true });
      console.log('Pet Fostered Successfully');
      setRerender(Math.random())
    } catch (err) {
      console.log(err);
    }
  };

  const handleUnFoster = async (petId) => {
    let res;
    try {
      res = await axios.put(`${process.env.REACT_APP_SERVER_URL}/pets/${petId}/foster`, { foster: false }, { withCredentials: true });
      console.log('Pet Unfostered Successfully');
      setRerender(Math.random())
    } catch (err) {
      console.log(err);
    }
  };

  
  return (
    <>
    <div className='test'>
      My Pets: {userPets.map((pet) => (<div key={pet.id}> 
      <img className="petPho" src={pet?.petImage} alt="pet" style={{width: '200px'}} />{pet.name}{" "} 
      {pet.adoptedById ? <button onClick={() => handleUnAdopt(pet.id)}>UnAdopt</button> : null}
      {pet.adoptedById ? <button onClick={() => handleFoster(pet.id)}>Foster Instead</button> : null}
      {pet.fosteredById ? <button onClick={() => handleUnFoster(pet.id)}>Unfoster</button> : null}
    </div>
  ))}
</div>

    </>
  )
}

export default MyPets