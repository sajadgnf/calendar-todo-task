import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { useSelector } from "react-redux";

const sameDate = (date1, date2) => {
  date1.getDate() === date2.getDate() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getFullYear() === date2.getFullYear();
};

const useStyle = makeStyles({
  day: {
    cursor: "pointer",
    float: "left",
    height: 34,
    width: 34,
    margin: "0 8px",
    color: "#FFF",
    textAlign: "center",
    paddingTop: 6,
    fontSize: 16,
    fontWeight: 400,
  },

  noDay: {
    cursor: "default",
    float: "left",
  },

  today: {
    backgroundColor: "#448AFF",
    borderRadius: "50%",
    color: "#000000",
    fontWeight: 500,
  },

  note: {
    cursor: "pointer",
    backgroundColor: "#7C4DFF",
    borderRadius: "50%",
    color: "#000000",
    fontWeight: 500,
  },

  clear: {
    clear: "both",
  },
});

const DaysMonth = () => {
  const date = useSelector((state) => state.date);
  // console.log(new Date(date.getTime()));
  const classes = useStyle();
  let actualDate = new Date(date.getTime());
  actualDate.setDate(1);

  let noteMonth = date;
  let actualMonth = actualDate.getMonth();
  let calendar = [];

  let firstDayOfMonth = actualDate.getDay() === 0 ? 7 : actualDate.getDay();

  for (let i = 1; i < firstDayOfMonth; i++) {
    calendar.push({ dayClass: "noDay", number: null });
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
      calendar.push({ dayClass: "noDay", number: null });
    }
  }
  return (
    <Box>
      {calendar.map((day, index) => {
        let notesDay = `${day.number}/${
          noteMonth.getMonth() + 1
        }/${noteMonth.getFullYear()}`;

        return day.number !== null ? (
          <div
            key={index}
            value={notesDay}
            className={`${classes.day}
                 ${day.dayClass === "noDay" && classes.noDay}
               ${day.dayClass === "today" && classes.today}
                ${day.dayClass === "day clear" && classes.clear}
            `}
          >
            {day.number}
          </div>
        ) : (
          <div
            key={index}
            className={`${classes.day}
                 ${day.dayClass === "noDay" && classes.noDay}
               ${day.dayClass === "today" && classes.today}
                ${day.dayClass === "day clear" && classes.clear}
            `}
          />
        );
      })}
    </Box>
  );
};

export default DaysMonth;
