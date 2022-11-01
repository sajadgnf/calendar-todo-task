import { Box } from "@mui/material";
import React from "react";
import DaysMonth from "../components/DaysMonth";
import DaysWeek from "../components/DaysWeek";

const Calendar = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      bgcolor="#0b0c0e"
      p={2}
      pt={8}
    >
      <DaysWeek />
      <DaysMonth />
    </Box>
  );
};

export default Calendar;
