import React, { useContext } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './HomePage.css'
import Item from '../Components/Item';
import { PetsContext } from '../Context/PetContextProvider'

import AnzaBorrego from '../Images/Backgrounds/AnzaBorrego.JPG'
import ArbuckleBamboo from '../Images/Backgrounds/ArbuckleBamboo.JPG'
import CoralReef from '../Images/Backgrounds/CoralReef.jpg'
import OzarkWaterfall from '../Images/Backgrounds/OzarkWaterfall.JPG'
import StormyBeach from '../Images/Backgrounds/StormyBeach.jpg'
import warning from '../Images/warning.webp'
import AvailableToAdoptCarousel from '../Components/AvailableToAdoptCarousel';

const HomePage = () => {
  const { petsList, fetchAllPets } = useContext(PetsContext);
  
  return (
    <>
    <div className='appItemsContainer'>
      <Item title='Adopt a challenged pet!™' slider={<AvailableToAdoptCarousel petsList={petsList} fetchAllPets={fetchAllPets} />} background={StormyBeach} />
      <Item
      title='About Our Animals'
      text={<div>Our pets have been through a lot. They may not be the prettiest pets, but they have big hearts (sort of)! These animals come from various habitats, ranging from the depths of the Pacific Ocean, to the scorching deserts of Egypt, and on through to the hearts of the Australian Woodlands. <br/><br/>Take your time getting to know your pet of interest's unique temperment and environmental needs. We'll be right here ready to answer any questions you may have!</div>}
      background={OzarkWaterfall}
      />
      <Item
      title={<img src={warning} className='warning'/>}
      text={<div className='warningText'>Owning a troubled pet can come with it's fair share of risks. It's important to know how to handle a variety of situations that may arise. Our trained experts will schedule a one-on-one consultation with you to determine the specific needs of your prospective pet.<br/><br/>From here we offer free 8 hour classes on how to properly handle and care for your new addition. The safety of your home and your pet are of utmost importance to us. We hope navigating and mitigating any potential hurdles, will lead to nothing but happiness for you and your pet!</div>}
      background={ArbuckleBamboo}
      />
      <Item title='Camel Dromedary' background={CoralReef} />
      <Item title='Camel Dromedary' background={AnzaBorrego} />
    </div>
    </>
  )
}

export default HomePage