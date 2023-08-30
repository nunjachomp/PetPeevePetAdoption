import React, { useState, useContext } from 'react';
import './AddYourPetForm.css'
import { PetsContext } from '../Context/PetContextProvider'

const AddYourPetForm = () => {


  const [name, setName] = useState('');
  const [species, setSpecies] = useState('');
  const [petImage, setPetImage] = useState('');

  const { addNewPet } = useContext(PetsContext);
  
  // const [simpleClassification, setSimpleClassification] = useState('');
  // const [adoptionStatus, setAdoptionStatus] = useState('');
  // const [photoUrl, setPhotoUrl] = useState('');
  // const [height, setHeight] = useState('');
  // const [weight, setWeight] = useState('');
  // const [primaryColor, setPrimaryColor] = useState('');
  // const [bio, setBio] = useState('');
  // const [hypoallergenic, setHypoallergenic] = useState('');
  // const [dietaryRestrictions, setDietaryRestrictions] = useState('');

  // const [petId, setPetId] = useState('');
  // const [createdDate, setCreatedDate] = useState('');
  
  

  const handleSubmit = (e) => {
    e.preventDefault(); 

    const newPet = new FormData()
   
    newPet.append('name', name)
    newPet.append('species', species)
    newPet.append('petImage', petImage)

    // const newPet = {
    //   name: name,
    //   species: species,

      // simple_classification: simpleClassification,
      // adoption_status: adoptionStatus,
      // photo_url: photoUrl,
      // height: height,
      // weight: weight,
      // primary_color: primaryColor,
      // bio: bio,
      // hypoallergenic: hypoallergenic,
      // dietary_restrictions: dietaryRestrictions,
      // pet_id: petId,
      // createdDate: createdDate,

        // pet_image: petImage,

        addNewPet(newPet)

        setName('');
        setSpecies('');

        
    };
    
    
    // setSimpleClassification('');
    // setAdoptionStatus('');
    // setPhotoUrl('');
    // setHeight('');
    // setWeight('');
    // setPrimaryColor('');
    // setBio('');
    // setHypoallergenic('');
    // setDietaryRestrictions('');
    // setPetId('');
    // setCreatedDate('');

    // setPetImage('');
 

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
          <input type='text' value={species} onChange={(e) => setSpecies(e.target.value)} required />
        </div>

        
        <div className='petimage'>
          <label>File</label>
          <input type='file' onChange={(e) => setPetImage(e.target.files[0])} required />
        </div>
        {/* <div className='petsimpleClassification'>
          <label>Animal Family (i.e. canine, fish, arachnid)</label>
          <input type='text' value={simpleClassification} onChange={(e) => setSimpleClassification(e.target.value)} required />
        </div>
        <div className='petAdoptionStatus'>
          <label>If you really want to send this pet for adoption, type "True"</label>
          <input type='boolean' value={adoptionStatus} onChange={(e) => setAdoptionStatus(e.target.value)} required />
        </div>
        <div className='petPhotoUrl'>
          <label>URL of your pet's photo</label>
          <input type='text' value={photoUrl} onChange={(e) => setPhotoUrl(e.target.value)} required />
        </div>
        <div className='petHeight'>
          <label>How tall is your pet?</label>
          <input type='text' value={height} onChange={(e) => setHeight(e.target.value)} required />
        </div>
        <div className='petWeight'>
          <label>How much does your pet weigh?</label>
          <input type='text' value={weight} onChange={(e) => setWeight(e.target.value)} required />
        </div>
        <div className='petPrimaryColor'>
          <label>What is your pet's main color?</label>
          <input type='text' value={primaryColor} onChange={(e) => setPrimaryColor(e.target.value)} required />
        </div>
        <div className='petBio'>
          <label>Tell us a little bit about your pet's origin story!</label>
          <input type='text' value={bio} onChange={(e) => setBio(e.target.value)} required />
        </div>
        <div className='petHypoallergenic'>
          <label>Is your pet hypoallergenic?</label>
          <input type='text' value={hypoallergenic} onChange={(e) => setHypoallergenic(e.target.value)} required />
        </div>
        <div className='petDietaryRestrictions'>
          <label>Does your pet have special dietary needs or restrictions?</label>
          <input type='text' value={dietaryRestrictions} onChange={(e) => setDietaryRestrictions(e.target.value)} required />
        </div> */}
        
        {/* <div className='petId'>
          <label>ID?</label>
          <input type='text' value={petId} onChange={(e) => setPetId(e.target.value)} required />
        </div>
        <div className='petDate'>
          <label>Date Created</label>
          <input type='text' value={createdDate} onChange={(e) => setCreatedDate(e.target.value)} required />
        </div> */}


      </div>
      <button variant='primary' type='submit' className='AddBtn'>
        Send For Adoption
      </button>
    </form>
    </div>
  );
};

export default AddYourPetForm;
