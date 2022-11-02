import { Box, Button, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import TodoNote from "../components/TodoNote";
import { RiHomeFill, RiSettings2Fill } from "react-icons/ri";
import { AiFillPlusCircle } from "react-icons/ai";

const TodoList = () => {
  const { notes, todoDate } = useSelector((store) => store);
  const [showTodos, setShowTodos] = useState(false);

  let searchNote = notes.map((note) => (note.date === todoDate ? note : " "));
  searchNote = searchNote.filter((note) => /\S/.test(note));

  return (
    <Box
      bgcolor="#fff"
      borderRadius={10}
      position="relative"
      px={3}
      sx={[
        showTodos
          ? { height: 565, transform: "translateY(-180px)" }
          : { height: "unset" },
        {
          transition: " all 0.15s ease",
        },
      ]}
    >
      <Typography
        component="h3"
        varaint="h6"
        fontWeight="bold"
        color="#999"
        mb={3}
        pt={4}
        onClick={() => setShowTodos(!showTodos)}
      >
        {showTodos ? "Planned" : "Upcoming"}
      </Typography>

      {/* notes */}
      <Grid container spacing={2} pb={14}>
        {searchNote.length > 0 ? (
          searchNote.map((note) => (
            <Grid item xs={12} key={note.id}>
              <TodoNote note={note} />
            </Grid>
          ))
        ) : (
          <Typography variant="h6" color="#777" m="auto" my={4}>
            Nothing For Today
          </Typography>
        )}
      </Grid>

      {/* main buttons */}
      <Box
        display="flex"
        justifyContent="space-around"
        alignItems="center"
        width="100%"
        position="absolute"
        bottom={0}
        left={"50%"}
        sx={{ transform: "translateX(-50%)" }}
      >
        <Button
          sx={{
            "&:hover": { background: "transparent" },
            "& span": { display: "none" },
          }}
        >
          <RiHomeFill style={{ color: "#444", fontSize: 35 }} />
        </Button>

        <Button
          sx={{
            "&:hover": { background: "transparent" },
            "& span": { display: "none" },
          }}
        >
          <AiFillPlusCircle style={{ color: "#333", fontSize: 70 }} />
        </Button>

        <Button
          sx={{
            "&:hover": { background: "transparent" },
            "& span": { display: "none" },
          }}
        >
          <RiSettings2Fill style={{ color: "#777", fontSize: 35 }} />
        </Button>
      </Box>
    </Box>
  );
};

export default TodoList;
