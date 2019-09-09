import React from 'react';
import './App.css';
import Header from './Components/Header/index';
import Time from './Components/Time/index';
import Vagas from './Components/Vagas/index'
import Beneficios from './Components/Beneficios';


function App() {
  return (
    <div className="App">
      <Header/>
      <Time/>
      <Beneficios/>
      <Vagas/> 
    </div>
  );
}

export default App;
