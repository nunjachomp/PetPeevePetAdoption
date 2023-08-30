import React, { useState, createContext, useContext, useEffect }  from 'react';
import axios from 'axios';
import { AuthContext } from './AuthContext';

const PetsContext = createContext();

const PetsContextProvider = ({children}) => {
    const [petsList, setPetsList] = useState([]);

    const { token } = useContext(AuthContext);

const fetchAllPets = async () => {
        try {
          const res = await axios.get('http://localhost:8080/pets', {withCredentials: true})
          console.log(res.data)
          setPetsList(res.data);
        } catch (err) {
          console.log(err);
        }
      };

      // useEffect(() =>{
      //   fetchAllPets()
      // },[])
    
      const addNewPet = async (newPet) => {
        try {
          const res = await axios.post('http://localhost:8080/pets', newPet, {withCredentials: true});
          console.log(res.data);
          const newPetsList = [...petsList, res.data];
          setPetsList(newPetsList);
        } catch (err) {
          console.log(err);
        }
      };
    
      const deletePet = async (petId) => {
        try {
          const res = await axios.delete(`http://localhost:8080/pets/${petId}`, {withCredentials: true});
          if (res.data.ok) {
            const revisedPetArray = petsList.filter((pet) => pet.id !== petId);
            setPetsList(revisedPetArray);
          }
        } catch (err) {
          console.log(err);
        }
      };
  
        return (
          <PetsContext.Provider value={{ petsList, setPetsList, fetchAllPets, addNewPet, deletePet }}>
            {children}
          </PetsContext.Provider>
        );
      };

      export { PetsContext };
      export default PetsContextProvider;