import React, {useEffect} from 'react'
import './Styles/Css/main.css'
import TubesDisplay from './Components/Tubes/Display/TubesDisplay'

const getData = async()=>{
  let local = "http://localhost:3000/tubes" 
  let Server =  "https://react-app-npc53.ondigitalocean.app/api/get-posts"  
  let response = await fetch(local) 
  let data = await response.json()
  return data
}

function App() {
 
  // useEffect(()=>{
  //   console.log("Something")
  //   getData()
  //   .then(value=>{
  //     console.log("value")
  //     console.log(value)
  //   })
  // }, [])

  return (
    <div className="App">
      <TubesDisplay />
    </div>
  );
}

export default App;
