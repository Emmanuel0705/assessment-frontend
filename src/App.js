import React from 'react';
import './App.css';
import MainHeader from './Components/MainHeader'
import Form from './Components/Form'
// import Estimation from './Components/Estimation'

function App() {
  return (
    <div className="App">
      <MainHeader/>
       <Form/>
       {/* <Estimation/> */}
    </div>
  );
}

export default App;
