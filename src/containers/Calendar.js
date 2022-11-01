import React from "react";
import DaysMonth from "../components/DaysMonth";
import DaysWeek from "../components/DaysWeek";

const Calendar = () => {
  return (
    <div>
      <DaysWeek />
      <DaysMonth />
    </div>
  );
};

export default Calendar;
