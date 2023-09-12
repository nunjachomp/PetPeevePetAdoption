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
    <div className='myPetsContainer'>
      <div className='petConsult'>All of your pets, both Adopted and Fostered, are being prepared for the consultation process!<br/><br/>
      Once you have completed the consultation with the team, you will be trained on how to care for your pet!</div>
      <div className='adoptedFostered'>
          <div className='adoptTitle'>My Adopted/Fostered Pets: </div>
          {userPets.map((pet) => (<div className='myPetsRow' key={pet.id}> 
          <img className="petPhoto" src={pet?.petImage} alt="pet" style={{width: '200px'}} />
          <div className='petName'>{pet.name}{" "}</div> 
          {pet.adoptedById ? <button className='petButton' onClick={() => handleUnAdopt(pet.id)}>UnAdopt</button> : null}
          {pet.adoptedById ? <button className='petButton' onClick={() => handleFoster(pet.id)}>Foster Instead</button> : null}
          {pet.fosteredById ? <button className='petButton' onClick={() => handleUnFoster(pet.id)}>Unfoster</button> : null}
        </div>
        ))}
      </div>

      <div className='saved'>
      <div className='savedTitle'> My Saved Pets: </div>
      {/* {savedPets.map((saved) => (<div className='myPetsRow' key={saved.id}> 
      <img className="petPhoto" src={saved?.petImage} alt="pet" style={{width: '200px'}} />
      <div className='petName'>{pet.name}{" "}</div> 
      {saved.savedById ? <button className='petButton' onClick={() => handleUnSave(pet.id)}>UnSave</button> : null}
      </div>
      ))} */}
      </div>
    </div>
    </>
  )
}

export default MyPets