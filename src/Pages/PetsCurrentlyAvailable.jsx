import React, { useContext, useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import DisplayAllPets from '../Components/DisplayAllPets';
import './PetsCurrentlyAvailable.css'
import { PetsContext } from '../Context/PetContextProvider'

const PetsCurrentlyAvailable = () => {
  const { petsList, fetchAllPets } = useContext(PetsContext);
  const [searchQuery, setSearchQuery] = useState(petsList.filter(pet => pet.adoptedById == null))

  useEffect(() =>{
    fetchAllPets()
  },[]);

  const handleSearchFunction = (value) => {
    const newSearch = petsList.filter(
      (animal) =>
      animal.name.toLowerCase().includes(value.toLowerCase()) ||
      animal.species.toLowerCase().includes(value.toLowerCase()) ||
      animal.simple_classification.toLowerCase().includes(value.toLowerCase()) ||
      animal.primary_color.toLowerCase().includes(value.toLowerCase()) ||
      animal.bio.toLowerCase().includes(value.toLowerCase())
    )
    setSearchQuery(newSearch)
  }

  return (
    <div className='backgroundPhotoContainer'>
    <Container>
    <input className='searchBar' type='text' placeholder='Search for a pet by attribute!' onChange={e => handleSearchFunction(e.target.value)}/>
      <Row className='petsAvail'>
        {searchQuery.map((pet) => (
          <Col key={pet.id} md={3}>
            <DisplayAllPets pet={pet} />
          </Col>
        ))}
      </Row>
    </Container>
    </div>
  );
};

export default PetsCurrentlyAvailable;
