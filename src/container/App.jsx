// App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../components/home'; // Parent avec Outlet
import QuotaForm from '../components/formulaire';


const App = () => {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element= {<Home /> }/>
        <Route path= 'form' element = {<QuotaForm /> } />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
