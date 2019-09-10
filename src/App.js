import React from 'react';
import Header from './Components/Header';
import Time from './Components/Time';
import Vagas from './Components/Vagas';
import Beneficios from './Components/Beneficios';
import Footer from './Components/footer';
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
