'use client'

import React, { useState } from 'react'
import { Button } from '@/src/components/common'
import { ITodo } from '@/src/models/Todo'
import { useRouter } from 'next/navigation'

type TodoProps = {
  todo: ITodo
  index: number
}

const Todo = ({ todo, index }: TodoProps) => {
  const router = useRouter()
  const [checked, setChecked] = useState(todo.isCompleted)

  const handleUpdateTodo = async () => {
    setChecked((prev) => !prev)

    try {
      const newTodo = {
        ...todo,
        id: todo._id,
        isCompleted: !checked,
      }

      const resp = await fetch('/api/todo', {
        method: 'PUT',
        body: JSON.stringify(newTodo),
      })

      if (resp.status !== 200) {
        const body = await resp.json()
        throw new Error(`Failed to update. ${resp.status}: ${body.message}`)
      }
    } catch (error) {
      setChecked(checked)
    }
  }

  const handleRemoveTodo = async () => {
    try {
      const resp = await fetch('/api/todo', {
        method: 'DELETE',
        body: JSON.stringify({ id: todo._id }),
      })

      if (resp.status !== 200) {
        const body = await resp.json()
        throw new Error(`Failed to update. ${resp.status}: ${body.message}`)
      }

      router.refresh()
    } catch (error) {}
  }

  const todoName = todo._id

  return (
    <li className='flex justify-between gap-2 items-center'>
      <div className='flex justify-start gap-2'>
        {`${index + 1}.`}
        <input
          type='checkbox'
          name={todoName}
          checked={checked}
          readOnly
          onChange={handleUpdateTodo}
        />
        <label htmlFor={todoName}>{todo.description}</label>
      </div>
      <Button
        submit
        type='error'
        name='todoId'
        value={todoName}
        onClick={handleRemoveTodo}
      >
        X
      </Button>
    </li>
  )
}

export default Todo
