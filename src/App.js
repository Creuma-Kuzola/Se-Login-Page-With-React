import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css';
import Login from './Login';
import './css/normalize/normalize.css'
import Cadastro from './Cadastro';

function App() {
  return (

    <BrowserRouter>
      <div className="App">
     
          <Routes>

            <Route 
             path={"/login"} 
             element={<Login/>} 
             />

            <Route 
             path={"/"} 
             element={<Cadastro />} 
            />

          </Routes>

        </div>
    </BrowserRouter>


  );
}

export default App;
