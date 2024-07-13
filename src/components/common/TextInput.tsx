'use client'

import React from 'react'

interface TextInputProps {
  title?: string
  placeholder?: string
  value?: string
  defaultValue?: string
  name?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  className?: React.ComponentProps<'input'>['className']
  variant?: 'default' | 'transparent'
  type?: 'text' | 'number'
  immutable?: boolean
}

const TextInput = ({
  title = '',
  value,
  defaultValue,
  name = '',
  onChange,
  placeholder = '',
  className = '',
  variant = 'default',
  type = 'text',
  immutable = false,
}: TextInputProps) => {
  const style = {
    default: 'p-2 text-dark-green',
    transparent: `
      text-light-green bg-transparent border-b-2 border-transparent 
      focus-visible:outline-none focus-visible:border-green focus-visible:border-b-2
      ${!immutable ? 'hover:border-light-green hover:border-b-2' : ''}
    `,
  }

  return (
    <input
      name={name}
      type={type}
      value={value}
      defaultValue={defaultValue}
      placeholder={placeholder}
      className={`${style[variant]} ${className}`}
      onChange={!immutable ? onChange : () => {}}
      disabled={immutable}
      title={immutable ? 'Immutable field' : title}
    />
  )
}

export default TextInput
