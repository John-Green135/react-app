import React, {useEffect} from 'react'
import {BrowserRouter} from 'react-router-dom' 
import './Styles/Css/main.css'
import TubesDisplay from './Components/Tubes/Display/TubesDisplay'
import Navbar from './Components/Navbar/Navbar'

function App() {
 

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <TubesDisplay />
      </BrowserRouter>
    </div>
  );
}

export default App;
