import React from 'react'
import Unauthorized from '@/src/components/Unauthorized'
import { getTodos } from '@/src/libs/todo'
import { auth } from '@clerk/nextjs/server'
import AddTodo from './(components)/AddTodo'
import { ITodo } from '@/src/models/Todo'
import TodoList from './(components)/TodoList'

const TodoPage = async () => {
  const todos: Array<ITodo> = await getTodos()
  const { has } = auth()

  const isAdmin = has({ role: 'org:admin' })

  if (!isAdmin) return <Unauthorized />

  return (
    <div className='relative mx-auto flex w-4/6 flex-col gap-4'>
      <div className='text-3xl md:text-5xl'>A list of Todo&apos;s</div>

      {todos?.length > 0 ? <TodoList todos={todos} /> : 'There are no todos'}
      <AddTodo />
    </div>
  )
}

export default TodoPage
