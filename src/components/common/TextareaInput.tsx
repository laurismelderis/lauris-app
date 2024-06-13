'use client'

import React from 'react'

interface TextareaInputProps {
  placeholder?: string
  value?: string
  defaultValue?: string
  name?: string
  className?: React.ComponentProps<'textarea'>['className']
  rows?: number
  variant?: 'default' | 'transparent'
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
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
  value,
  defaultValue,
  name = '',
  placeholder = '',
  className = '',
  rows = 1,
  variant = 'default',
  onChange,
}: TextareaInputProps) => (
  <textarea
    value={value}
    name={name}
    defaultValue={defaultValue}
    placeholder={placeholder}
    className={`${style[variant]} ${className}`}
    rows={rows}
    onChange={onChange}
  />
)

export default TextareaInput
