import { TODO_DATE } from '../actionTypes/actionTypes'

const todoDateAction = (updateTodoDate) => ({
  type: TODO_DATE,
  payload: {
    todoDate: updateTodoDate
  }
})

export default todoDateAction
