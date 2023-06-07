import ActivitiesContainer from "./components/Activities/ActivitiesContainer";

import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "./App.css";

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
      <ActivitiesContainer />
    </div>
  );
}

export default App;
