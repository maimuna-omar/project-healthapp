import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import AddDailyActivity from "./components/Activities/AddDailyActivities";
// import Dashboard from "./components/Dashboard";
// import LoginSignup from './Components/Activities/DailyActivity';

// for log in i will place the path here
// import { createBrowserRouter, RouterProvider } from "react-router-dom";

// const router = createBrowserRouter (
//   [{ path: '/', element:<App/>},
//   { path: '/healthgoals', element:<App/>},
//   { path: '/dailyactivity', element:<AddDailyActivity/>},
//   { path: '/dashboard', element:<Dashboard/>},
//   // { path: '/login', element:<LoginSignup />}

// ]

// )
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
