import axios from 'axios'
import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import './SinglePet.css'

const SinglePet = () => {
  const [petInfo, setPetInfo] = useState({})

  const {id} = useParams()

  const getSinglePet = async() => {
     try {
      const res = await axios.get(`${process.env.REACT_APP_SERVER_URL}/pets/${id}`)
      setPetInfo(res.data)
     }catch(err) {
      console.log(err)
     }
  }
  
  useEffect(() => {
    getSinglePet()
  }, [])

  return (
    <div className='outerIndividualPet'>
      <div className='individualPetProfileContainer'>
        <h1>{petInfo.name}</h1>
        <h3>{petInfo.species}</h3>
        <img className='individualPetPhoto' src={petInfo.petImage} alt={petInfo.name}/>
        <p>Type: {petInfo.simple_classification}</p>
        <p>Available to adopt? {petInfo.adoption_status}</p>
        <p>Height: {petInfo.height}</p>
        <p>Weight: {petInfo.weight}</p>
        <p>Hypoallergenic: {petInfo.hypoallergenic}</p>
        <p>Bio: {petInfo.bio}</p>
        <p>Dietary Needs: {petInfo.dietary_restrictions}</p>
      </div>
    </div>
  )
}

export default SinglePet