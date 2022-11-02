import { Box, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import todoDateAction from "../redux/actions/todoDateAction";

const sameDate = (date1, date2) => {
  return (
    date1.getDate() === date2.getDate() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getFullYear() === date2.getFullYear()
  );
};

const useStyle = makeStyles({
  day: {
    cursor: "pointer",
    float: "left",
    height: 34,
    minWidth: 34,
    margin: "5px 8px",
    color: "#f5f4f5",
    textAlign: "center",
    padding: 0,
    paddingTop: 6,
    fontSize: 16,
    fontWeight: 400,
    "&:focus": {
      background: "#6e6e6e",
      borderRadius: "50%",
      fontWeight: 500,
    },
  },

  noDay: {
    cursor: "default",
    float: "left",
    height: 34,
    width: 34,
    margin: "0 8px",
    color: "#f5f4f5",
    textAlign: "center",
    paddingTop: 6,
    fontSize: 16,
    fontWeight: 400,
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

  selected: {
    background: "#ff2",
  },
});

const DaysMonth = () => {
  const date = useSelector((state) => state.date);

  const dispatch = useDispatch();

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

  //change date
  const handleDay = ({ target }) => {
    let todoDate = target.getAttribute("value");
    dispatch(todoDateAction(todoDate));
  };

  return (
    <Box>
      {calendar.map((day, index) => {
        let notesDay = `${day.number}/${
          noteMonth.getMonth() + 1
        }/${noteMonth.getFullYear()}`;

        return day.number !== null ? (
          <Button
            key={index}
            value={notesDay}
            onClick={handleDay}
            className={`${classes.day}
            ${day.dayClass.includes("today") && classes.today}
             ${day.dayClass.includes("clear") && classes.clear}
            `}
          >
            {day.number}
          </Button>
        ) : (
          <div key={index} className={classes.noDay} />
        );
      })}
    </Box>
  );
};

export default DaysMonth;
