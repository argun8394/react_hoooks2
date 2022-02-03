import logo from './logo.svg';
import './App.css';
import React, {useState,useEffect} from 'react';
import Header from "./components/Header";
import List from "./components/List";
import aws from "./assets/aws.png";
import fs from "./assets/fs.png";
import axios from "axios";

function App() {
  const [counter,setCounter] =useState(0);
  const [img,setImg] = useState();
  const [studentsList, setStudentsList]= useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      //.then((res)=> console.log(res));
      .then((res)=> setStudentsList(res.data));
  },[]);{/*ilk anda çalışsın sadece */}
  return (
    <div className="App">
       <Header img={img}/> {/*props ile componentte değişiklik yaparsak useMemo ya rağmen render olur   */}
      <p>counter : {counter}</p>
      <button onClick={()=>setCounter(counter+1)}>Increase</button>
      <button onClick={()=>setImg(fs)}>fs</button>
      <button onClick={()=>setImg(aws)}>aws</button>
      <button onClick={()=>setImg("")}>reset</button>
      <hr />
      <List students={studentsList}/>

     
    </div>
  );
}

export default App;
