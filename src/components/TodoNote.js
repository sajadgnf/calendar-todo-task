import { Box, Typography } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import React from "react";
import moment from "moment/moment";
import shorten from "../utils/shorten";
import Image from "next/image";

const TodoNote = ({ note }) => {
  const { color, description, location, startTime, endTime, createdAt, icon } =
    note;

  const time = moment(createdAt).fromNow();

  return (
    <Box bgcolor={color} borderRadius={5} p={2}>
      {/* content */}
      <Box display="flex" alignItems="center">
        <Typography variant="h6" fontSize={18} fontWeight="bold" mr>
          {description}
        </Typography>
        <Image
          src={icon}
          alt={"color icon"}
          width={18}
          height={18}
          style={{ marginRight: 10 }}
        />
        &#8226;
        <Typography>{shorten(time)}</Typography>
      </Box>

      {/* location */}
      <Box display="flex" alignItems="center" color="#6f6f6f" mt>
        <Box display="flex" alignItems="center">
          <LocationOnIcon fontSize="small" />

          <Typography ml={0.5} mr={5} fontSize={14} fontWeight="bold">
            {location}
          </Typography>
        </Box>

        {/* start-end time */}
        <Box display="flex" alignItems="center">
          <WatchLaterIcon fontSize="small" />

          <Typography ml={0.5} fontSize={14} fontWeight="bold">
            {startTime} - {endTime}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default TodoNote;
