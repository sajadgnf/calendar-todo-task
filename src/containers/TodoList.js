import { Box } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

const TodoList = () => {
  const { notes, todoDate } = useSelector((store) => store);

  let searchNote = notes.map((note) => (note.date === todoDate ? note : " "));
  searchNote = searchNote.filter((note) => /\S/.test(note));
  console.log(searchNote);
  return (
    <Box bgcolor="#fff" height={300} borderRadius={10}>
   
    </Box>
  );
};

export default TodoList;
