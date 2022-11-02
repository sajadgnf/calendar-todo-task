import { Box } from "@mui/material";
import Calendar from "../containers/Calendar";
import TodoList from "../containers/TodoList";

export default function Home() {
  return (
    <Box
      borderRadius={10}
      mb={10}
      bgcolor="#22242b"
      width={420}
      maxHeight="100vh"
    >
      <Calendar />
      <TodoList />
    </Box>
  );
}
