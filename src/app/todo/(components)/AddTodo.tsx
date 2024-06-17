import React from 'react'
import { Button, TextareaInput } from '@/src/components/common'
import { addTodo } from '@/src/libs/todo'
import { revalidatePath } from 'next/cache'

const AddTodo = () => {
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

  return (
    <>
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
    </>
  )
}

export default AddTodo
