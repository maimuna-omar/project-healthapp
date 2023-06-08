import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AddDailyActivity from "./Components/Activities/AddDailyActivities";
// import LoginSignup from './Components/Activities/DailyActivity';
import Dashboard from './components/Dashboard';
// for log in i will place the path here
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter (
  [{ path: '/', element:<App/>},
  { path: '/healthgoals', element:<App/>},
  { path: '/dailyactivity', element:<AddDailyActivity/>},
  { path: '/dashboard', element:<Dashboard/>},
  // { path: '/login', element:<LoginSignup />}

]

)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

