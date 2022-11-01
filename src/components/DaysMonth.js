import React from "react";

const sameDate = (date1, date2) => {
  date1.getDate() === date2.getDate() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getFullYear() === date2.getFullYear();
};

const DaysMonth = () => {
  let actualDate = new Date();
  actualDate.setDate(1);

  let noteMonth = actualDate;
  let actualMonth = actualDate.getMonth();
  let calendar = [];

  let firstDayOfMonth = actualDate.getDay() === 0 ? 7 : actualDate.getDay();

  for (let i = 1; i < firstDayOfMonth; i++) {
    calendar.push({ dayClass: "no-day", number: null });
  }

  while (actualDate.getMonth() === actualMonth) {
    let dayClass = ["day"];
    if (sameDate(actualDate, new Date())) {
      dayClass.push("today");
    }
    if (actualDate.getDay() === 1) {
      dayClass.push("clear");
    }
    calendar.push({
      dayClass: dayClass.join(" "),
      number: actualDate.getDate(),
    });
    actualDate.setDate(actualDate.getDate() + 1);
  }

  if (actualDate.getDate() === 0) {
    for (let i = 7, j = calendar.length % 7; i > j; i--) {
      calendar.push({ dayClass: "no-day", number: null });
    }
  }

  return (
    <div>
      {calendar.map((day, index) => {
        let notesDay = `${day.number}/${
          noteMonth.getMonth() + 1
        }/${noteMonth.getFullYear()}`;
        return day.number !== null ? (
          <div
            key={index}
            value={notesDay}
            className={day.dayClass}
          >
            {day.number}
          </div>
        ) : (
          <div key={index} className={day.dayClass} />
        );
      })}
    </div>
  );
};

export default DaysMonth;
