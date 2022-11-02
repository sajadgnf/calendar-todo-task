import { Box, Button, Typography } from "@mui/material";
import months from "../data/months";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import decrement from "../redux/actions/decrement";
import increment from "../redux/actions/increment";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

const ChangeMonth = () => {
  const date = useSelector((state) => state.date);
  const dispatch = useDispatch();

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      width="100%"
      px={1}
      mb={3}
    >
      <Typography fontWeight='bold' component='h3' variant="h6">{months[date.getMonth()]}</Typography>

      <Box>
        <Button
          sx={{ minWidth: 34, padding: 0, color: "#f5f4f5" }}
          onClick={() => dispatch(decrement())}
        >
          <ExpandMoreIcon />
        </Button>
        <Button
          sx={{ minWidth: 34, padding: 0, color: "#f5f4f5" }}
          onClick={() => dispatch(increment())}
        >
          <ExpandLessIcon />
        </Button>
      </Box>
    </Box>
  );
};

export default ChangeMonth;
