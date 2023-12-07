// import './App.css';
import React from 'react';

import LoginSignUp from './components/LoginSignUp';
import Home from './components/home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MeuComponente from './components/home/Button';

function App() {
  return (
    <> 
        <LoginSignUp></LoginSignUp>

        {/* <Router>
         <Home></Home> 
        <Routes>
          <Route path='/' exact Component={Home}/>
        </Routes>
         </Router> 
        <MeuComponente/>  */}
    </>
  );
}

export default App;



