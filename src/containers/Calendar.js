import { Box } from "@mui/material";
import React from "react";
import ChangeMonth from "../components/ChangeMonth";
import DaysMonth from "../components/DaysMonth";
import DaysWeek from "../components/DaysWeek";

const Calendar = () => {
  return (
    <Box
      display="flex"
      borderRadius={10}
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      bgcolor="#22242b"
      color="#fff"
      p={2}
      pt={8}
    >
      <ChangeMonth />
      <DaysWeek />
      <DaysMonth />
    </Box>
  );
};

export default Calendar;
