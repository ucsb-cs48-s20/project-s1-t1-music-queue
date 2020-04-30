import React from 'react';
//import ReactDOM from 'react-dom';
//import './index.css';
//import App from './App'
import Login from '../components/Login';
//import * as serviceWorker from './serviceWorker';
function Homepage (){
  return(
  <div>
    <header>
      <h1 style={{textAlign: "center"}}>Welcome to MusicQ!</h1>
    </header>
    <Login />
  </div>
  )
};

export default Homepage;

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
