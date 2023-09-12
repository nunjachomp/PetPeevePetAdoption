import axios from 'axios'
import {useState, useEffect, useContext} from 'react'
import { useParams } from 'react-router-dom'
import { AuthContext } from '../Context/AuthContext'
import { useNavigate } from 'react-router-dom';
import './SinglePet.css'

const SinglePet = () => {
  const [petInfo, setPetInfo] = useState({})
  const [savedPet, setSavedPet] = useState([])
  const [isSaved, setIsSaved] = useState(false);
  const navigate = useNavigate()

  const {id} = useParams()
  const {user} = useContext(AuthContext)

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
      navigate(`/user/:id/`)
    }catch(err){
      console.log(err)
    }
  }

  const savePet = async(e) => {
    let res
    try {
      res = await axios.post(`${process.env.REACT_APP_SERVER_URL}/adoption/save`, {petId: parseInt(id), userId: user}, {withCredentials: true})
      console.log(res.data)
      setSavedPet(res.data)
      setIsSaved(true)
    } catch(err) {
      console.log(err)
    }
  }

  const unSavePet = async(e) => {
    let res
    try {
      res = await axios.post(`${process.env.REACT_APP_SERVER_URL}/adoption/save`, {petId: null, userId: null}, {withCredentials: true})  
      console.log(res.data)
      setSavedPet(res.data)
      setIsSaved(false)
    } catch(err) {
      console.log(err)
    }
  }
 
  // const getSavedPets = async() => {
  //   try {
  //   res = await axios.get(`${process.env.REACT_APP_SERVER_URL}/adoption/save`)  
  //   console.log(res.data)
  //   } catch(err) {
  //     console.log(err)
  //   }
  // }

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
        {/* <button id='unadopt' onClick={adoptPet}>Unadopt</button> */}
        {isSaved == false ? (
        <button id='saved' onClick={savePet}>Save For Later</button> ) : (
        <button id='unsaved' onClick={unSavePet}>Unsave For Later</button>)}
     
      </div>
    </div>
  )
}

export default SinglePet