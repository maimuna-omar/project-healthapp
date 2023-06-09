import React, { useState, useEffect } from "react";
import AddDailyActivity from "./AddDailyActivities";
import ActivityList from "./ActivityList";

function ActivitiesContainer({ currentUser }) {

  const [userData, setUserData] = useState([]);
  // const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    date: "",
    walking: "",
    workout: "",
    waterintake: "",
    sleep: "",
  });

  useEffect(() => {
    if (currentUser) {
      setUserData([currentUser]);
    }
  }, [currentUser]);

  console.log("what");
  // setUserData(currentUser)

  // const base_url = "http://localhost:3000/users";

  // useEffect(() => {
  //   fetchUserData();
  // }, []);

  // async function fetchUserData() {
  //   try {
  //     const res = await fetch(base_url);
  //     const fetchedUserData = await res.json();
  //     setUserData(fetchedUserData);
  //     // setLoading(false);
  //   } catch (error) {
  //     console.log(error);
  //     // setLoading(false);
  //   }
  // }

  // console.log(userData);

  const onChangeHandler = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // console.log(userData);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const deleteActivityHandler = () => {
    console.log("This has been deleted");
  };

  return (
    <div className="container min-h-screen min-w-full pt-5 bg-blue-200">
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
