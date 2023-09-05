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

  const adoptPet = async(e) => {
    let res
    try{
      if (e.target.id == 'adopt') {
      res = await axios.put(`${process.env.REACT_APP_SERVER_URL}/pets/${id}/adopt`, {adopt: true}, {withCredentials: true})
      } else if (e.target.id == 'unadopt') {
      res = await axios.put(`${process.env.REACT_APP_SERVER_URL}/pets/${id}/adopt`, {adopt: false}, {withCredentials: true})
      }
      setPetInfo(res.data)
    }catch(err){
      console.log(err)
    }
  }

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
        <button id='adopt' onClick={adoptPet}>Adopt</button>
        <button id='unadopt' onClick={adoptPet}>Unadopt</button>
        <button>Foster</button>
        <button>Release Pokemon</button>
      </div>
    </div>
  )
}

export default SinglePet