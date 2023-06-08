import Header from "./components/Landingpage/Header";
import Landingpage from "./components/Landingpage/Landingpage";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "./components/Landingpage/Landingpage.css";
import { useNavigate } from "react-router-dom";


function App() {
  const [userData, setUserData] = useState([]);
  const navigate = useNavigate()
  const baseUrl =
    "https://my-json-server.typicode.com/Wambuiwambugu/Group-8-REST-API/users";

  useEffect(() => {
    fetch(`${baseUrl}`)
      .then((res) => res.json())
      .then((data) => setUserData(data));
  }, []);
  console.log(userData);

function clickHandler() {
  navigate("/login");
  

}


  return (
    <div className="App">
     <Header/>
     <Landingpage clickHandler={clickHandler}/>
    
    </div>
  );
}

export default App;