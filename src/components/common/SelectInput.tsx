'use client'

import React from 'react'

interface SelectInputProps {
  name?: string
  defaultValue?: string
  options?: Array<string>
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void
  variant?: 'default' | 'transparent'
  className?: string
}

const style = {
  select: {
    default: 'text-dark-gray',
    transparent: `
      bg-transparent text-white border-b-2 border-transparent 
      focus-visible:outline-none focus-visible:border-light-blue focus-visible:border-b-2
      hover:border-white hover:border-b-2
    `,
  },
  option: {
    default: 'text-dark-gray',
    transparent: `
      bg-gray hover:bg-white
    `,
  },
}

const SelectInput = ({
  name,
  defaultValue = '',
  options = [''],
  onChange = () => {},
  variant = 'default',
  className = '',
}: SelectInputProps) => {
  return (
    <select
      name={name}
      defaultValue={defaultValue}
      onChange={onChange}
      className={`${className} ${style.select[variant]}`}
    >
      {options?.map((option) => (
        <option key={option} value={option} className={style.option[variant]}>
          {option}
        </option>
      ))}
    </select>
  )
}

export default SelectInput
