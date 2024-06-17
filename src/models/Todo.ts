import mongoose, { Schema } from 'mongoose'

export interface ITodo {
  _id: string
  description: string
  isCompleted?: boolean
}

const todoSchema = new Schema<ITodo>({
  description: String,
  isCompleted: {
    type: Boolean,
    default: false,
  },
})

const Todo = mongoose?.models?.Todo || mongoose.model('Todo', todoSchema)

export default Todo
