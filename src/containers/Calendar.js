import React from "react";

const Calendar = () => {

  return (
    <div>
          <DaysWeek />
          <DaysMonths date={date} handleDay={handleDay} notes={notes} />
    </div>
  );
};


export default Calendar;
