import axios from 'axios'
import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'

const SinglePet = () => {
  const [petInfo, setPetInfo] = useState({})

  const {id} = useParams()

  const getSinglePet = async() => {
     try {
      const res = await axios.get(`http://localhost:8080/pets/${id}`)
      setPetInfo(res.data)
     }catch(err) {
      console.log(err)
     }
  }
  
  useEffect(() => {
    getSinglePet()
  }, [])

  return (
    <div>
        <h1>{petInfo.name}</h1>
        <h3>${petInfo.species}</h3>
        <img src={petInfo.petImage} alt={petInfo.name}/>
    </div>
  )
}

export default SinglePet