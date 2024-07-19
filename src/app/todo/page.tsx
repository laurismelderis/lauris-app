import React from 'react'
import { getTodos } from '@/src/libs/todo'
import AddTodo from './(components)/AddTodo'
import { ITodo } from '@/src/models/Todo'
import TodoList from './(components)/TodoList'
import withAuth from '../(components)/withAuth'

const TodoPage = async () => {
  const todos: Array<ITodo> = await getTodos()

  return (
    <div className='relative mx-auto flex w-4/6 flex-col gap-4'>
      <div className='text-3xl md:text-5xl'>A list of Todo&apos;s</div>

      {todos?.length > 0 ? <TodoList todos={todos} /> : 'There are no todos'}
      <AddTodo />
    </div>
  )
}

export default withAuth(TodoPage)
