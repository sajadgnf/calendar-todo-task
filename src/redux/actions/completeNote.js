import { COMPLETE_NOTE } from '../actionTypes/actionTypes'

const completeNote = (id) => ({
  type: COMPLETE_NOTE,
  payload: {
    id
  }
})

export default completeNote
