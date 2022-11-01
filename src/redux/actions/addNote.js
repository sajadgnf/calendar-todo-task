import { NEW_NOTE } from '../actionTypes/actionTypes'

const addNote = (date, description) => ({
  type: NEW_NOTE,
  payload: {
    id: new Date().getUTCMilliseconds(),
    date,
    description
  }
})

export default addNote
