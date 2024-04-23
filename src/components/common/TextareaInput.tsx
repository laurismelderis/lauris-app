import React from 'react'
import ReactTextareaAutosize from 'react-textarea-autosize'

interface TextareaInputProps {
  placeholder?: string
  value?: string
  name?: string
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  className?: string
  rows?: number
  minRows?: number
  maxRows?: number
  variant?: 'default' | 'transparent'
  cacheMeasurements?: boolean
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
  name = '',
  onChange,
  placeholder = '',
  className = '',
  minRows = 8,
  maxRows = 8,
  variant = 'default',
  cacheMeasurements = false,
}: TextareaInputProps) => {
  let rowProps: {
    minRows?: number
    maxRows?: number
    cacheMeasurements?: boolean
  } = {
    minRows,
    maxRows,
  }

  if (cacheMeasurements) {
    rowProps = { cacheMeasurements }
  }

  return (
    <ReactTextareaAutosize
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`${style[variant]} ${className}`}
      {...rowProps}
    />
  )
}

export default TextareaInput
