import React from 'react'

interface TextInputProps {
  placeholder?: string
  value?: string
  name?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  className?: string
  variant?: 'default' | 'transparent'
  type?: 'text' | 'number'
}

const style = {
  default: 'p-2 text-dark-gray',
  transparent: `
    text-white bg-transparent border-b-2 border-transparent 
    focus-visible:outline-none focus-visible:border-light-blue focus-visible:border-b-2
    hover:border-white hover:border-b-2
  `,
}

const TextInput = ({
  value,
  name = '',
  onChange,
  placeholder = '',
  className = '',
  variant = 'default',
  type = 'text',
}: TextInputProps) => {
  return (
    <input
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`${style[variant]} ${className}`}
    />
  )
}

export default TextInput
