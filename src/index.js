import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Store from './Systems/store'


const Index = () =>{

  return <App />

}

ReactDOM.render(
  
  <Store>
    <Index />
  </Store>,

  document.getElementById('root')
);
