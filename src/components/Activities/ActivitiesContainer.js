import React, { useState, useEffect } from "react";
import AddDailyActivity from "./AddDailyActivities";
import ActivityList from "./ActivityList";

function ActivitiesContainer() {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    date: "",
    walking: "",
    workout: "",
    waterintake: "",
    sleep: "",
  });

  const base_url =
    "https://my-json-server.typicode.com/Ken-Musau/JSONFile/users";

  useEffect(() => {
    fetchUserData();
  }, []);

  async function fetchUserData() {
    try {
      const res = await fetch(base_url);
      const fetchedUserData = await res.json();
      setUserData(fetchedUserData);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }
  const onChangeHandler = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const deleteActivityHandler = () => {
    console.log("This has been deleted");
  };

  return (
    // <div className="container min-h-screen min-w-full bg-sky-200 pt-5">
    <div className="container min-h-screen min-w-full pt-5 bg-green-200 ">
      <AddDailyActivity
        formData={formData}
        changeHandler={onChangeHandler}
        submitHandler={onSubmitHandler}
      />
      {loading ? (
        <div className="flex justify-center items-center h-full">
          <p className="text-2xl font-bold text-gray-600">Loading...</p>
        </div>
      ) : (
        <ActivityList
          userData={userData}
          deleteActivity={deleteActivityHandler}
        />
      )}
    </div>
  );
}

export default ActivitiesContainer;
