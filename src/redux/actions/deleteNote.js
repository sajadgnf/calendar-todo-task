import { DELETE_NOTE } from '../actionTypes/actionTypes'

const deleteNote = (id) => ({
  type: DELETE_NOTE,
  payload: {
    id,
  },
});

export default deleteNote
