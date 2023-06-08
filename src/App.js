import Header from "./components/Landingpage/Header";
import Landingpage from "./components/Landingpage/Landingpage";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "./components/Landingpage/Landingpage.css";


function App() {
  const [userData, setUserData] = useState([]);
  const baseUrl =
    "https://my-json-server.typicode.com/Wambuiwambugu/Group-8-REST-API/users";

  useEffect(() => {
    fetch(`${baseUrl}`)
      .then((res) => res.json())
      .then((data) => setUserData(data));
  }, []);
  console.log(userData);


  return (
    <div className="App">
     <Header/>
     <Landingpage/>
   
    </div>
  );
}

export default App;