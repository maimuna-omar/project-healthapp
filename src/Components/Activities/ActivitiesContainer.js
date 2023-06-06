import React from "react";
import AddDailyActivity from "./AddDailyActivities";
import ActivityList from "./ActivityList";

function ActivitiesContainer() {
  return (
    <div className="container min-h-screen min-w-full bg-sky-200 ">
      <AddDailyActivity />
      <ActivityList />
    </div>
  );
}

export default ActivitiesContainer;
