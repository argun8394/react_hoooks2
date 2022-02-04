import logo from './logo.svg';
import './App.css';
import React, {useState,useEffect, useMemo,useCallback} from 'react';
import Header from "./components/Header";
import List from "./components/List";
import aws from "./assets/aws.png";
import fs from "./assets/fs.png";
import axios from "axios";

function App() {
  const [counter,setCounter] =useState(0);
  const [img,setImg] = useState();
  const [studentsList, setStudentsList]= useState([]);
  const [text, setText] = useState("");
  console.log("text", text);
  const [search, setSearch] = useState("");
  console.log("search", search);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      //.then((res)=> console.log(res));
      .then((res)=> setStudentsList(res.data));
  },[]);{/*ilk anda çalışsın sadece */}

  const handleText=(e)=>{
    setText(e.target.value);
  }

  const handleSearch=()=>{
    setSearch(text)
  }

  const filteredStudent=useMemo(()=> studentsList.filter(student=>{{/*useMemo ile hafızaya atılan değeri search etmiş olduk ve her tuşlamada render işleminin önüne geçmiş olduk */}
    return student.name.toLowerCase().includes(search.toLowerCase())
  }),[search, studentsList])//useMemo ya dependeci vermemiz gerekir doğru çalışması için, gereksiz renderı engelledik sadece istrediğimizde çalışır ve hafızaya atılan değeri döndürdük 

const add = useCallback(()=>{{/*useCallback kullandığımız fonksiyonu hafızaya alıp dependeci array değişince tekrar hesaplayıp tekrar hafızaya alıyor,sürekli renderı önlüyor */}
  setStudentsList([...studentsList, {id: studentsList.length + 1, name:"Edward CW"},]);
},[studentsList]);

  return (
    <div className="App">
       <Header img={img}/> {/*props ile componentte değişiklik yaparsak React.Memo ya rağmen render olur   */}
      <p>counter : {counter}</p>
      <button onClick={()=>setCounter(counter+1)}>Increase</button>
      <button onClick={()=>setImg(fs)}>fs</button>
      <button onClick={()=>setImg(aws)}>aws</button>
      <button onClick={()=>setImg("")}>reset</button>
      <hr />
      <input type="text" value={text} onChange={handleText} />
      <button onClick={handleSearch}>Search</button>
      {/* <List students={studentsList}/> */}
      <List students={filteredStudent} add={add}/>

     
    </div>
  );
}

export default App;
