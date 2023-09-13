import React, { useState, useContext } from 'react';
import './AddYourPetForm.css'
import { PetsContext } from '../Context/PetContextProvider'

const AddYourPetForm = () => {
  const { addNewPet } = useContext(PetsContext);

  const [name, setName] = useState('');
  const [species, setSpecies] = useState('');
  const [petImage, setPetImage] = useState('');
  const [simpleClassification, setSimpleClassification] = useState('');
  const [adoptionStatus, setAdoptionStatus] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [primaryColor, setPrimaryColor] = useState('');
  const [bio, setBio] = useState('');
  const [hypoallergenic, setHypoallergenic] = useState('');
  const [dietaryRestrictions, setDietaryRestrictions] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); 

    const newPet = new FormData()
   
    newPet.append('name', name)
    newPet.append('species', species)
    newPet.append('petImage', petImage)
    newPet.append('simple_classification', simpleClassification)
    newPet.append('adoption_status', adoptionStatus)
    newPet.append('height', height)
    newPet.append('weight', weight)
    newPet.append('primary_color', primaryColor)
    newPet.append('bio', bio)
    newPet.append('hypoallergenic', hypoallergenic)
    newPet.append('dietary_restrictions', dietaryRestrictions)

    addNewPet(newPet)

        setName('');
        setSpecies('');
        setSimpleClassification('');
        setAdoptionStatus('');
        setHeight('');
        setWeight('');
        setPrimaryColor('');
        setBio('');
        setHypoallergenic('');
        setDietaryRestrictions('');

    };
    
  return (
    <div className='sendContainer'>
    <form className='sendPetAwayForm' onSubmit={handleSubmit}>
      <div className='sendPetAwayContainer'>
        <p>We understand that not every schedule or lifestyle is compatible with pet ownership. With this reality in mind, we will happily take your pets off of your hands, and find them good homes. <br/><br/>Simply fill out the form below, and we'll add your pet to our queue!<br/></p>
        <div className='petName'>
          <label>Name</label>
          <input type='text' value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div className='petSpecies'>
          <label>Species</label>
          <input className='petForm' type='text' value={species} onChange={(e) => setSpecies(e.target.value)} required />
        </div>

        <div className='petimage'>
          <label>Photo of your pet!</label>
          <input className='petForm' type='file' onChange={(e) => setPetImage(e.target.files[0])} required />
        </div>
        <div className='petsimpleClassification'>
          <label>Animal Family (i.e. canine, fish, arachnid)</label>
          <input className='petForm' type='text' value={simpleClassification} onChange={(e) => setSimpleClassification(e.target.value)} required />
        </div>
        <div className='petAdoptionStatus'>
          <label>If you really want to send this pet for adoption, type "True"</label>
          <input className='petForm' type='boolean' value={adoptionStatus} onChange={(e) => setAdoptionStatus(e.target.value)} required />
        </div>
        <div className='petHeight'>
          <label>How tall is your pet?</label>
          <input className='petForm' type='text' value={height} onChange={(e) => setHeight(e.target.value)} required />
        </div>
        <div className='petWeight'>
          <label>How much does your pet weigh?</label>
          <input className='petForm' type='text' value={weight} onChange={(e) => setWeight(e.target.value)} required />
        </div>
        <div className='petPrimaryColor'>
          <label>What is your pet's main color?</label>
          <input className='petForm' type='text' value={primaryColor} onChange={(e) => setPrimaryColor(e.target.value)} required />
        </div>
        <div className='petBio'>
          <label>Tell us a little bit about your pet's origin story!</label>
          <input className='petForm' type='text' value={bio} onChange={(e) => setBio(e.target.value)} required />
        </div>
        <div className='petHypoallergenic'>
          <label>Is your pet hypoallergenic?</label>
          <input className='petForm' type='text' value={hypoallergenic} onChange={(e) => setHypoallergenic(e.target.value)} required />
        </div>
        <div className='petDietaryRestrictions'>
          <label>Does your pet have special dietary needs or restrictions?</label>
          <input className='petForm' type='text' value={dietaryRestrictions} onChange={(e) => setDietaryRestrictions(e.target.value)} required />
        </div>

      </div>
      <button variant='primary' type='submit' className='AddBtn'>
        Send For Adoption
      </button>
    </form>
    </div>
  );
};

export default AddYourPetForm;
