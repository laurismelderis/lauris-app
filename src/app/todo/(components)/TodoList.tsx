import React from 'react'
import { ITodo } from '@/src/models/Todo'
import Todo from './Todo'

type TodoListProps = {
  todos: Array<ITodo>
}

const TodoList = ({ todos }: TodoListProps) => {
  return (
    <ol type='1' className='flex flex-col gap-2'>
      {todos.map((todo, index) => (
        <Todo
          key={todo._id}
          todo={JSON.parse(JSON.stringify(todo))}
          index={index}
        />
      ))}
    </ol>
  )
}

export default TodoList
