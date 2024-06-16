'use client'

import React from 'react'

interface TextInputProps {
  placeholder?: string
  value?: string
  defaultValue?: string
  name?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  className?: React.ComponentProps<'input'>['className']
  variant?: 'default' | 'transparent'
  type?: 'text' | 'number'
}

const style = {
  default: 'p-2 text-dark-green',
  transparent: `
    text-light-green bg-transparent border-b-2 border-transparent 
    focus-visible:outline-none focus-visible:border-green focus-visible:border-b-2
    hover:border-light-green hover:border-b-2
  `,
}

const TextInput = ({
  value,
  defaultValue,
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
      defaultValue={defaultValue}
      placeholder={placeholder}
      className={`${style[variant]} ${className}`}
      onChange={onChange}
    />
  )
}

export default TextInput
