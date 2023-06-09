import React, { useState, useEffect } from "react";
import AddDailyActivity from "./AddDailyActivities";
import ActivityList from "./ActivityList";

function ActivitiesContainer({ currentUser, baseUrl }) {
  const [userData, setUserData] = useState([]);
  // const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    date: "",
    walking: "",
    workout: "",
    waterintake: "",
    sleep: "",
  });

  // console.log(userData);
  

  useEffect(() => {
    if (currentUser) {
      setUserData([currentUser]);
    }
  }, [currentUser]);

  const ActivityToPost = {
    date: formData.date,
    walking: formData.walking,
    sleep: formData.sleep,
    waterIntake: formData.waterintake,
    workoutTime: formData.workout,
  };

  const onChangeHandler = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // console.log(userData);

  async function postUserActivities() {
    try {
      const resp = await fetch(baseUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(ActivityToPost),
      });
      const data = await resp.json();
      console.log(data);
      // Handle the response data here
    } catch (error) {
      console.log(error);
    }
  }

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(formData);
    postUserActivities();
  };

  const deleteActivityHandler = () => {
    console.log("This has been deleted");
  };

  return (
    <div className="min-h-screen min-w-full pt-5 bg-blue-200">
      <AddDailyActivity
        formData={formData}
        changeHandler={onChangeHandler}
        submitHandler={onSubmitHandler}
      />

      <ActivityList
        userData={userData}
        deleteActivity={deleteActivityHandler}
      />
    </div>
  );
}

export default ActivitiesContainer;
