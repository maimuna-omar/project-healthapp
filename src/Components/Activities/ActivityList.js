import React from "react";
// import "./Activity.css";
// import DailyActivity from "./DailyActivity";

function ActivityList({ activities, deleteHandler }) {
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th>
              <h3>Date</h3>
            </th>
            <th>
              <h3>Walking</h3>
            </th>
            <th>
              <h3>WorkOut</h3>
            </th>
            <th>
              <h3>Water intake</h3>
            </th>
            <th>
              <h3>Calories consumed</h3>
            </th>
            <th>
              <h3>Sleep Duration</h3>
            </th>
            <th></th>
          </tr>
          {/* {activities.map((activity) => (
            <DailyActivity
              key={activity.id}
              id={activity.id}
              date={activity.date}
              Walking={activity.Walking}
              WorkOut={activity.WorkOut}
              Waterintake={activity.Waterintake}
              Caloriesconsumed={activity.Caloriesconsumed}
              SleepDuration={activity.SleepDuration}
              deleteHandler={deleteHandler}
            />
          ))} */}
        </tbody>
      </table>
    </div>
  );
}

export default ActivityList;
