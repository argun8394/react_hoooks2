import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import Header from "./components/Header";
// import List from "./components/List";
// import aws from "assets/aws.png";
// import fs from "assets/fs.png";

function App() {
  const [counter,setCounter] =useState(0);
  return (
    <div className="App">
      <Header/>
      <p>counter : {counter}</p>
      <button onClick={()=>setCounter(counter+1)}>Increase</button>
     
    </div>
  );
}

export default App;
