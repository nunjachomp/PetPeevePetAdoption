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
        <div className='PetContainer' style={{cursor: 'pointer'}} onClick={() => navigate(`/pet/${pet.id}`) }>
          <span className='hiddenDelete' onClick={handleDeletePet}>*</span>
          <div>
            <p>{pet?.name}</p>
            <p>the {pet?.species}</p>
            {/* {console.log(pet)}
            {console.log(pet.petImage)} */}

            <img className="petProfilePhoto" src={pet?.petImage} alt="pet" /> 
            <p>{pet.bio}</p>
          </div>
        </div>
    </>
  );
};

export default DisplayAllPets;
