import { Routes, Route } from "react-router-dom";
import './App.css';
import Header from './Components/Header';
import HomePage from './Pages/HomePage';
import PetsCurrentlyAvailable from './Pages/PetsCurrentlyAvailable';
import AddYourPetForm from './Pages/AddYourPetForm';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import PetsContextProvider from './Context/PetContextProvider';
import AuthContextProvider from './Context/AuthContext';
import PrivateRoute from './Components/PrivateRoute';
import SinglePet from './Components/SinglePet';
import AdminDashboard from "./Pages/AdminDashboard";
// import PrivateRouteAdmin from "./Components/PrivateRouteAdmin";
import FORBIDDEN from "./Pages/FORBIDDEN";

function App() {

  return (
    <>
     <AuthContextProvider>
      <PetsContextProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/home" element={<PrivateRoute><HomePage /></PrivateRoute>} />
          <Route path="/sendPet" element={<PrivateRoute><AddYourPetForm /></PrivateRoute>} />
          <Route path="/allAdoptablePets" element={<PrivateRoute><PetsCurrentlyAvailable /></PrivateRoute>} />
          <Route path='/pet/:id' element={<PrivateRoute><SinglePet/></PrivateRoute>} />
          <Route path='/admin' element={<PrivateRoute><AdminDashboard/></PrivateRoute>} />
          {/* <Route path='/admin' element={<PrivateRouteAdmin><AdminDashboard/></PrivateRouteAdmin>} /> */}
          <Route path='/FORBIDDEN' element={<FORBIDDEN/>} />
        </Routes>
      </PetsContextProvider>
    </AuthContextProvider>
    </>
  );
}

export default App;
