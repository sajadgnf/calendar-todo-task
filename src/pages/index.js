import { Box } from "@mui/material";
import Calendar from "../containers/Calendar";
import TodoList from "../containers/TodoList";

export default function Home() {
  return (
    <Box borderRadius={10} overflow="hidden" bgcolor="#22242b" width={420}>
      <Calendar />
      <TodoList />
    </Box>
  );
}
