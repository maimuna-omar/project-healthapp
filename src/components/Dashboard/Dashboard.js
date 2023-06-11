// Dashboard.js
import React from "react";
import { Link } from "react-router-dom";
import Chart from "./Chart";
import Select from "react-select";

const Dashboard = ({ userData, handleLogout }) => {
  const user = userData;
  const activities = userData.dailyActivities;
  const [selectedActivity, setSelectedActivity] = React.useState(null);

  const options = [
    { label: "Walking", value: "walking" },
    { label: "Sleep", value: "sleep" },
    { label: "Water Intake", value: "waterIntake" },
    { label: "Work Out Time", value: "workoutTime" },
  ];

  const handleSelectChange = (selectedOption) => {
    setSelectedActivity(selectedOption.value);
  };

  return (
    <div className="flex justify-center">
      {/* Sidebar */}
      <div className="w-1/3 bg-gray-800 text-white p-4 h-screen">
        {/* Sidebar content */}
        <ul>
          <li className="mb-2">
            <Link to="/dashboard/goals" className="text-blue-500 hover:text-blue-700">
              Goals
            </Link>
          </li>
          <li>
            <Link to="/dashboard/activities" className="text-blue-500 hover:text-blue-700">
              Activities
            </Link>
          </li>
        </ul>
        <button className="text-blue-500 hover:text-blue-700 mt-4" onClick={handleLogout}>
          Logout
        </button>
      </div>

      {/* Main Content */}
      <div className="p-4 h-screen w-full items-center bg-gray-100">
        <h1 className="text-2xl font-bold mb-4">Welcome, {user.name}!</h1>

        {/* Rest of the dashboard content */}
        <h2 className="text-xl font-bold mb-2">Health Goals</h2>
        {/* Render the user's goals here */}
        {/* <GoalList goals={goals} /> */}

        <h3 className="text-xl font-bold mb-2">Health Achievements</h3>

        <Select
          options={options}
          placeholder="Select to view activity"
          onChange={handleSelectChange}
        />

        {selectedActivity !== null ? (
          <Chart activities={activities} chartType={selectedActivity} />
        ) : null}
      </div>
    </div>
  );
};

export default Dashboard;
