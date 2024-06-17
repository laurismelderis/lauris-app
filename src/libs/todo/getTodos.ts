import Todo from '@/src/models/Todo'
import connectMongoDb from '../mongodb'

const getTodo = async () => {
  try {
    await connectMongoDb()
    const todos = await Todo.find()

    return todos
  } catch (error) {
    throw new Error(String(error))
  }
}

export default getTodo
