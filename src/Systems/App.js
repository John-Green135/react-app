import React, {useEffect} from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom' 
import '../Styles/Css/main.css'

import Navbar from '../Components/Navbar/Navbar'
import TubesDisplay from '../Components/Tubes/Display/TubesDisplay'
import WebcamsDisplay from '../Components/Webcams/Display/WebcamsDisplay'
import PornstarDisplay from '../Components/Pornstars/Display/PornstarDisplay'
import PornstarProfile from '../Components/Pornstars/Profile/PornstarProfile'

function App() {
 

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

        <Switch>

              <Route exact path = {"/"}>
                  <TubesDisplay />
              </Route>
              <Route path = {"/tubes"}>
                  <TubesDisplay />
              </Route>

              <Route path = {"/webcams"}>
                  <WebcamsDisplay />
              </Route>
              
              <Route exact path = {"/pornstars"}>
                  <PornstarDisplay />
              </Route>

              <Route exact path = {"/pornstars/:model"}>
                  <PornstarProfile />
              </Route>
             
            </Switch>

      </BrowserRouter>
    </div>
  );
}

export default App;
