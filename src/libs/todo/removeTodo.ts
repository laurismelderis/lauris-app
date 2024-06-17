import Todo from '@/src/models/Todo'
import connectMongoDb from '../mongodb'

const removeTodo = async (id: string) => {
  try {
    await connectMongoDb()
    await Todo.findByIdAndDelete(id)
  } catch (error) {
    throw new Error(String(error))
  }
}

export default removeTodo
