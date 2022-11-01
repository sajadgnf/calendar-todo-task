import { Box, Typography } from "@mui/material";
import React from "react";
import daysWeek from "../data/daysWeek";

const DaysWeek = () => {
  return (
    <Box display="flex">
      {daysWeek.map((day) => (
        <Typography
          key={day}
          width={34}
          height={34}
          mx
          color="#afa2a2"
          textTransform="uppercase"
        >
          {day}
        </Typography>
      ))}
    </Box>
  );
};

export default DaysWeek;
