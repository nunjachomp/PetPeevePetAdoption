import React, { useState, createContext, useContext, useEffect }  from 'react';
import axios from 'axios';
import { AuthContext } from './AuthContext';

const PetsContext = createContext();

const PetsContextProvider = ({children}) => {
    const [petsList, setPetsList] = useState([]);
    const [savedList, setSavedList] = useState([]);

    const { token } = useContext(AuthContext);

const fetchAllPets = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_SERVER_URL}/pets`, {withCredentials: true})
      setPetsList(res.data);
    } catch (err) {
      console.log(err);
    }
  };

const fetchAllSavedPets = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_SERVER_URL}/adoption/savedpets`, {withCredentials: true})
      console.log('Response data:', res.data);
      setSavedList(res.data);
    } catch (err) {
      console.log(err);
    }
};

  const addNewPet = async (newPet) => {
    try {
      const res = await axios.post(`${process.env.REACT_APP_SERVER_URL}/pets`, newPet, {withCredentials: true});
      console.log(res.data);
      const newPetsList = [...petsList, res.data];
      setPetsList(newPetsList);
    } catch (err) {
      console.log(err);
    }
  };

  const deletePet = async (petId) => {
    try {
      const res = await axios.delete(`${process.env.REACT_APP_SERVER_URL}/pets/${petId}`, {withCredentials: true});
      if (res.data.ok) {
        const revisedPetArray = petsList.filter((pet) => pet.id !== petId);
        setPetsList(revisedPetArray);
      }
    } catch (err) {
      console.log(err);
    }
  };
  
        return (
          <PetsContext.Provider value={{ petsList, setPetsList, fetchAllPets, addNewPet, deletePet, fetchAllSavedPets, savedList, setSavedList }}>
            {children}
          </PetsContext.Provider>
        );
      };

      export { PetsContext };
      export default PetsContextProvider;