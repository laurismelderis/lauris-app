import connectMongoDb from '../mongodb'
import Todo, { ITodo } from '@/src/models/Todo'

export type AddTodoProps = Omit<ITodo, '_id'>

const addTodo = async (event: AddTodoProps) => {
  try {
    await connectMongoDb()

    const newTodo = new Todo({
      ...event,
    })

    const error = newTodo.validateSync()
    if (error) throw new Error(String(error))

    await newTodo.save()
  } catch (error) {
    throw new Error(String(error))
  }
}

export default addTodo
