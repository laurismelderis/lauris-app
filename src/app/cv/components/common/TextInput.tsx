import React from 'react'

interface TextInputProps {
  placeholder?: string
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const TextInput = ({
  value = '',
  onChange = () => {},
  placeholder = '',
}: TextInputProps) => {
  return (
    <input
      type='text'
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className='p-2 text-dark-gray'
    />
  )
}

export default TextInput
