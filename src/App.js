import React from 'react';
import Header from './Components/Header/index';
import Time from './Components/Time/index';
import Vagas from './Components/Vagas/index'
import Beneficios from './Components/Beneficios';
import Footer from './Components/footer'
import './css/main.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Time/>
      <Beneficios/>
      <Vagas/>
      <Footer/>
    </div>
  );
}

export default App;