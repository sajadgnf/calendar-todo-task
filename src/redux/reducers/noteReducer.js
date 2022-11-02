import { NEW_NOTE, DELETE_NOTE } from "../actionTypes/actionTypes";
import NOTES from "../../data/notes";

const noteReducer = (notes = NOTES, { type, payload }) => {
  switch (type) {
    case NEW_NOTE:
      return notes.concat({
        id: `${payload.id}`,
        description: payload.description,
        color: payload.color,
        icon: payload.icon,
        startTime: payload.startTime,
        endTime: payload.endTime,
        date: payload.date,
        location: payload.location,
        createdAt: new Date(),
      });
    case DELETE_NOTE:
      return notes.filter((note) => note.id !== payload.id);
    default:
      return notes;
  }
};

export default noteReducer;
