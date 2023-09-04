import { useContext } from 'react';
import { PetsContext } from '../Context/PetContextProvider';
import { useNavigate } from 'react-router-dom';
import './DisplayAllPets.css'

const DisplayAllPets = ({ pet }) => {
  const { deletePet } = useContext(PetsContext)
  const navigate = useNavigate()

  const handleDeletePet = () => {
    deletePet(pet.id)
  }

  return (
    <>
        <div className='PetContainer'>
          <span className='hiddenDelete' onClick={handleDeletePet}>*</span>
          <div>
            <p>{pet?.name}</p>
            <p>the {pet?.species}</p>
            <img className="petProfilePhoto" src={pet?.petImage} alt="pet" /> 
            <p>{pet.bio}</p>
            <button style={{cursor: 'pointer'}} onClick={() => navigate(`/pet/${pet.id}`) }>See More</button>
          </div>
        </div>
    </>
  );
};

export default DisplayAllPets;
