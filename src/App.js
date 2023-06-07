// import ActivitiesContainer from "./Components/Activities/ActivitiesContainer";
import LoginSignup from "./Components/Login/LoginSignup";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "./App.css";

function App() {
  const [userData, setUserData] = useState([]);
  const baseUrl =
    " http://localhost:8080/users";

  useEffect(() => {
    fetch(`${baseUrl}`)
      .then((res) => res.json())
      .then((data) => setUserData(data));
  }, []);
   console.log(userData);

  return (
    <div className="App">
       <LoginSignup userData={userData} baseUrl={baseUrl} />
      {/* <ActivitiesContainer /> */}
      welcome to App! development
    </div>
  );
}

export default App;
