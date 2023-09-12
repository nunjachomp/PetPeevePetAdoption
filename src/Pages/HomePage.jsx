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
    <div className='appItemsContainer'><div id='backToTop'></div>

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

      <Item title={<div id='testimonials' className='testimonialTitle'>Testimonials</div>}  text={<div className='testimonialOne'>I was a bit unsure of what to expect when taking on my troubled pet, but the friendly and experienced people at PetPeeve put me at ease! - <span className='testimonialName'>Spider Pig</span><br /><br />
      Caring for unconventional animals can be a daunting task, but PetPeeve was there for me every step of the way! - <span className='testimonialName'>Loren Ipawer</span><br />
      <br />The people at PetPeeve really have a lot of experience caring for animals of all kinds. They really have a way of highlighting the best traits in every pet. I really love Penne my Pangolin! - <span className='testimonialName'>Brundle McBrundleson</span></div>}
      background={CoralReef} />

      <Item title={<div className='aboutUsTitle'>Testimonials</div>} text={<div className='aboutUs'>
        At PetPeeve, we believe every pet deserves a loving home. Our mission is to provide a safe and nurturing environment for these pets, where they can thrive and be loved. Our team of dedicated professionals works tirelessly to rehabilitate and train these pets, ensuring that they are ready for adoption and can become beloved members of their new families.<br/><br />Our adoption process is thorough and comprehensive, designed to ensure that each pet is matched with the right owner. We provide support and guidance throughout the process, offering resources and advice to help both pets and owners adjust to their new lives together.<br/><br/>By adopting a troubled pet from PetPeeve, you are giving a second chance to a deserving animal. If you are interested in adopting a pet from PetPeeve, we encourage you to browse our available pets and contact us for more information. </div>} background={AnzaBorrego} />
    </div>
    </>
  )
}

export default HomePage