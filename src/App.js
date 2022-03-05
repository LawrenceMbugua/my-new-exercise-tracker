//import logo from './logo.svg';
//import './App.css';
import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"

//Components imported
import Navbar from "./components/NavBar.component"
import ExercisesList from "./components/exercisesList.componet"
import EditExercises from "./components/EditExercises.component"
import CreateExercises from "./components/CreateExercise.component"
import CreateUser from "./components/CreateUser.component"
import Parent from "./components/Test.component"

export const AppContext = createContext()

function App() {

  const [state, setState] = useState({
           
    username: '',
    description: '',
    duration: 0,
    users: [],
    exercises: []

  });
  
  return (
    <AppContext.Provider value={{state, setState}}>
    <Router>

      <div  className="container">
        <Navbar />
        <br />
        
        <Routes>

          <Route path="/" exact element={<ExercisesList />} />
          
          <Route path="/edit/:id" element={<EditExercises />} />
          
          <Route path="/create" element={<CreateExercises/>} />
          
          <Route path="/user" element={<CreateUser/>} />
          
          <Route path="/test" element={<Parent/>} />
          
        </Routes> 
      </div>
      </Router>
      </AppContext.Provider>
  );
}

export default App;
