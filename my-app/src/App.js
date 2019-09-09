import React from 'react';
import './App.css';
import Header from './Components/Header/index';
import Time from './Components/Time/index';
import Vagas from './Components/Vagas/index'


function App() {
  return (
    <div className="App">
      <Header/>
      <Time/>
      <Vagas/> 
    </div>
  );
}

export default App;
