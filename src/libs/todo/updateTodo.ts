import Todo, { ITodo } from '@/src/models/Todo'
import connectMongoDb from '../mongodb'

export type UpdateTodoProps = Omit<ITodo, '_id'>

const updateTodo = async (id: string, todo: UpdateTodoProps) => {
  try {
    await connectMongoDb()

    const newTodo = new Todo({
      ...todo,
    })

    const error = newTodo.validateSync()

    if (error) throw new Error(String(error))

    if (!id) throw new Error('Missing todo id')

    const response = await Todo.findByIdAndUpdate(id, {
      ...todo,
    })

    return response
  } catch (error) {
    throw new Error(String(error))
  }
}

export default updateTodo
