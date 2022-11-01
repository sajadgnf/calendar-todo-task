import React from "react";
import daysWeek from "../data/daysWeek";

const DaysWeek = () => {
  return (
    <div>
      {daysWeek.map((day) => (
        <div key={day}>{day}</div>
      ))}
    </div>
  );
};

export default DaysWeek;
