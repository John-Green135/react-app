import React from 'react';
import ReactDOM from 'react-dom';
import App from './Systems/App';
import Store from './Systems/store'
import 'dotenv'

const Index = () =>{
  
  return <App />

}

ReactDOM.render(
  
  <Store>
    <Index />
  </Store>,

  document.getElementById('root')
);
