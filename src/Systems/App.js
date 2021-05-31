import React, {useEffect} from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom' 
import '../Styles/Css/main.css'

import Navbar from '../Components/Navbar/Navbar'
import TubesDisplay from '../Components/Tubes/Display/TubesDisplay'
import PornstarDisplay from '../Components/Pornstars/Display/PornstarsDisplay'

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
              
              <Route exact path = {"/pornstars"}>
                  <PornstarDisplay />
              </Route>
             
            </Switch>

      </BrowserRouter>
    </div>
  );
}

export default App;
