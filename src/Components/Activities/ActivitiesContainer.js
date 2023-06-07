import React, { useState, useEffect } from "react";
import AddDailyActivity from "./AddDailyActivities";
import ActivityList from "./ActivityList";

function ActivitiesContainer() {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);

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

  const deleteActivityHandler = () => {
    console.log('This has been deleted');
  };

  return (
    <div className="container min-h-screen min-w-full bg-sky-200 pt-5">
      <AddDailyActivity />
      {loading ? (
        <div className="flex justify-center items-center h-full">
          <p className="text-2xl font-bold text-gray-600">Loading...</p>
        </div>
      ) : (
        <ActivityList userData={userData} deleteActivity={deleteActivityHandler}/>
      )}
    </div>
  );
}

export default ActivitiesContainer;
