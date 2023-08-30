import React, { useContext, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import DisplayAllPets from '../Components/DisplayAllPets';
import './PetsCurrentlyAvailable.css'
import { PetsContext } from '../Context/PetContextProvider'

const PetsCurrentlyAvailable = () => {
  const { petsList, fetchAllPets } = useContext(PetsContext);

  useEffect(() =>{
    fetchAllPets()
  },[]);

  return (
    <div className='backgroundPhotoContainer'>
    <Container>
      <Row className='petsAvail'>
        {petsList.map((pet) => (
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
