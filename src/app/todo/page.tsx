import React from 'react'
import { Button, TextareaInput } from '@/src/components/common'
import Unauthorized from '@/src/components/Unauthorized'
import { addTodo, getTodos, removeTodo } from '@/src/libs/todo'
import { auth } from '@clerk/nextjs/server'
import { revalidatePath } from 'next/cache'

const TodoPage = async () => {
  const todos = await getTodos()
  const { has } = auth()

  const isAdmin = has({ role: 'org:admin' })

  if (!isAdmin) return <Unauthorized />

  const handleAddTodo = async (formData: FormData) => {
    'use server'

    try {
      const description = formData.get('description') as string

      if (description && description.length > 0) {
        await addTodo({ description })

        revalidatePath('/todo')
      }
    } catch (e) {
      console.error(e)
    }
  }

  const handleRemoveTodo = async (formData: FormData) => {
    'use server'

    try {
      const todoId = formData.get('todoId') as string

      if (todoId) {
        await removeTodo(todoId)

        revalidatePath('/todo')
      }
    } catch (e) {
      console.error(e)
    }
  }

  const handleUpdateTodo = async (formData: FormData) => {
    'use server'

    console.log(formData)
  }

  return (
    <div className='pt-8 mx-auto w-4/6 relative flex flex-col gap-4'>
      <div className='text-3xl md:text-5xl'>A list of Todo&apos;s</div>

      {todos?.length > 0 ? (
        <ol type='1' className='flex flex-col gap-2'>
          {todos.map((todo, index) => {
            const todoName = todo.id

            // Could handle this in client side
            return (
              <li
                key={todo.id}
                className='flex justify-between gap-2 items-center'
              >
                <form action={handleUpdateTodo}>
                  <div className='flex justify-start gap-2'>
                    {`${index + 1}.`}
                    <input
                      type='checkbox'
                      name={todoName}
                      checked={todo.completed}
                      readOnly
                    />
                    <label htmlFor={todoName}>{todo.description}</label>
                  </div>
                </form>
                <form action={handleRemoveTodo}>
                  <Button submit type='error' name='todoId' value={todoName}>
                    Remove
                  </Button>
                </form>
              </li>
            )
          })}
        </ol>
      ) : (
        'There are no todos'
      )}
      <div className='text-xl md:text-3xl'>Add new todo</div>

      <form className='flex flex-col items-start gap-4' action={handleAddTodo}>
        <TextareaInput
          variant='transparent'
          placeholder='Add description'
          className='w-full'
          rows={8}
          name='description'
        />
        <Button submit>Add</Button>
      </form>
    </div>
  )
}

export default TodoPage
