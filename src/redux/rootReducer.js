import { combineReducers } from "redux";
import date from "./reducers/dateReducer";
import todoDate from "./reducers/todoDateReducer";
import notes from "./reducers/noteReducer";

const rootReducer = combineReducers({
  date,
  todoDate,
  notes,
});

export default rootReducer;
