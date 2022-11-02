import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import TodoNote from "../components/TodoNote";

const TodoList = () => {
  const { notes, todoDate } = useSelector((store) => store);

  let searchNote = notes.map((note) => (note.date === todoDate ? note : " "));
  searchNote = searchNote.filter((note) => /\S/.test(note));

  return (
    <Box bgcolor="#fff" borderRadius={10} px={3} py={4}>
      <Typography
        component="h3"
        varaint="h6"
        fontWeight="bold"
        color="#999"
        mb={3}
      >
        Upcoming
      </Typography>

      <Grid container spacing={3}>
        {searchNote.length > 0 ? (
          searchNote.map((note) => (
            <Grid item xs={12} key={note.id}>
              <TodoNote note={note} />
            </Grid>
          ))
        ) : (
          <Typography variant="h6" color="#777" m='auto' my={4}>
            Nothing For Today
          </Typography>
        )}
      </Grid>
    </Box>
  );
};

export default TodoList;
