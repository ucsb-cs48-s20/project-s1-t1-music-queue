import React from "react";
//import ReactDOM from 'react-dom';
//import './index.css';
//import App from './App'
import Header from "../components/Header";
import Login from "./Login";
import Layout from "../components/Layout";
import RoomCode from "../components/RoomCode";
function Homepage() {
  return (
    <div>
      <Login />
      <RoomCode />
    </div>
  );
}

export default Homepage;
