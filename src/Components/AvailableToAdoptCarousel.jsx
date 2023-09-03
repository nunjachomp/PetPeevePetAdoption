import React, {useEffect} from "react";
import "./AvailableToAdoptCarousel.css";
import Carousel from "react-bootstrap/Carousel";

const AvailableToAdoptCarousel = ({ petsList, fetchAllPets }) => {

    useEffect(() => {
      fetchAllPets()
    },[])
    
    return (
    <>
      <Carousel className="carouselContainer">
        {petsList.map((pet) => (
          <Carousel.Item className=".carousel-indicators" key={pet.id}>
            <img src={pet?.petImage} alt={"Pet Carousel"} className="d-block w-100" />
            <Carousel.Caption>
              <p className="animalName"><span>&#9656;</span>{pet?.name}<span>&#9666;</span><br />the {pet?.species}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
};

export default AvailableToAdoptCarousel;
