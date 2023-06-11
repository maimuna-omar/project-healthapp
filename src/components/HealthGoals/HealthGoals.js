

import React, { useState, useEffect } from "react";
import image from "../../Images/image.png";
import "./HealthGoals.css";
import axios from "axios";

const baseUrl = "https://my-json-server.typicode.com/Wambuiwambugu/Group-8-REST-API/users";

const HealthGoals = () => {
  const [goals, setGoals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [newWorkoutGoal, setNewWorkoutGoal] = useState("");
  const [newWalkingGoal, setNewWalkingGoal] = useState("");
  const [newSleepingGoal, setNewSleepingGoal] = useState("");
  const [newWaterIntakeGoal, setNewWaterIntakeGoal] = useState("");
  const [selectedDate, setSelectedDate] = useState("");

  useEffect(() => {
    fetchGoals();
  }, []);

  const fetchGoals = async () => {
    try {
      const response = await axios.get(baseUrl);
      console.log("API response:", response.data);
      setGoals(response.data || []);  // Assuming the response directly provides an array of user goals
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching goals:", error);
      setIsLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const existingGoalIndex = goals.findIndex((goal) => goal.date === selectedDate);
    const updatedGoals = [...goals];
    if (existingGoalIndex !== -1) {
      updatedGoals[existingGoalIndex] = {
        workout: newWorkoutGoal,
        walking: newWalkingGoal,
        sleeping: newSleepingGoal,
        waterIntake: newWaterIntakeGoal,
        date: selectedDate,
      };
    } else {
      updatedGoals.push({
        workout: newWorkoutGoal,
        walking: newWalkingGoal,
        sleeping: newSleepingGoal,
        waterIntake: newWaterIntakeGoal,
        date: selectedDate,
      });
    }
    setGoals(updatedGoals);
    setNewWorkoutGoal("");
    setNewWalkingGoal("");
    setNewSleepingGoal("");
    setNewWaterIntakeGoal("");
    setSelectedDate("");
  };

  const getGoalString = (goal, unit) => {
    return `${goal} ${unit} `;
  };

  return (
    <div className="Health-goals">
      <div className="content">
        <div className="image-container">
          <img src={image} alt="Personalized Workouts" className="image" />
        </div>
        <div className="Goals-container">
          <h2>Health Goals</h2>
          <h2 className="summary">Set Your Health Goals Today!</h2>
          <form onSubmit={handleSubmit} className="form-container">
            <div className="form-group">
              <label>
                Date:
                <br />
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                />
              </label>
            </div>
            <br />
            <div className="form-group">
              <label>
                Workout:
                <br />
                <input
                  type="number"
                  placeholder="set your workout target in hours"
                  value={newWorkoutGoal}
                  onChange={(e) => setNewWorkoutGoal(e.target.value)}
                />
              </label>
            </div>
            <br />
            <div className="form-group">
              <label>
                Walking:
                <br />
                <input
                  type="number"
                  placeholder="set your walking target in meters"
                  value={newWalkingGoal}
                  onChange={(e) => setNewWalkingGoal(e.target.value)}
                />
              </label>
            </div>
            <br />
            <div className="form-group">
              <label>
                Sleeping:
                <br />
                <input
                  type="number"
                  placeholder="set your sleeping target in hours"
                  value={newSleepingGoal}
                  onChange={(e) => setNewSleepingGoal(e.target.value)}
                />
              </label>
            </div>
            <br />
            <div className="form-group">
              <label>
                Water intake:
                <br />
                <input
                  type="number"
                  placeholder="set your water intake target in cups"
                  value={newWaterIntakeGoal}
                  onChange={(e) => setNewWaterIntakeGoal(e.target.value)}
                />
              </label>
            </div>
            <br />
            <button type="submit" className="submit-button">
              Submit Goals
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HealthGoals;
