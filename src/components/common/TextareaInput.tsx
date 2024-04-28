import React from 'react'

interface TextareaInputProps {
  placeholder?: string
  defaultValue?: string
  name?: string
  className?: string
  rows?: number
  variant?: 'default' | 'transparent'
}

const style = {
  default: 'text-dark-gray',
  transparent: `
    text-white bg-transparent
    focus-visible:outline-none focus-visible:border-light-blue focus-visible:border-b-2
    hover:border-white hover:border-b-2
  `,
}

const TextareaInput = ({
  defaultValue,
  name = '',
  placeholder = '',
  className = '',
  rows = 1,
  variant = 'default',
}: TextareaInputProps) => (
  <textarea
    name={name}
    defaultValue={defaultValue}
    placeholder={placeholder}
    className={`${style[variant]} ${className}`}
    rows={rows}
  />
)

export default TextareaInput