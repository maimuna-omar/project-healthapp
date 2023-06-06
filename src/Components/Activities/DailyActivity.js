import React from "react";

function DailyActivity({
  id,
  date,
  Walking,
  WorkOut,
  Waterintake,
  Caloriesconsumed,
  SleepDuration,
  deleteHandler,
}) {
  return (
    <tr>
      <td>{date}</td>
      <td>{Walking}</td>
      <td>{WorkOut}</td>
      <td>{Waterintake}</td>
      <td>{Caloriesconsumed}</td>
      <td>{SleepDuration}</td>
      <td>
        <button onClick={() => deleteHandler(id)}>Delete</button>
      </td>
    </tr>
  );
}

export default DailyActivity;
