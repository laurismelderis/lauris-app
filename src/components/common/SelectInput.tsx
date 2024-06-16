'use client'

import React from 'react'

interface SelectInputProps {
  name?: string
  value?: string
  defaultValue?: string
  options?: Array<string>
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void
  variant?: 'default' | 'transparent'
  className?: React.ComponentProps<'select'>['className']
}

const style = {
  select: {
    default: 'text-dark-green',
    transparent: `
      bg-transparent text-light-green border-b-2 border-transparent 
      focus-visible:outline-none focus-visible:border-green focus-visible:border-b-2
      hover:border-light-green hover:border-b-2
    `,
  },
  option: {
    default: 'text-dark-green',
    transparent: `
      bg-gray hover:bg-light-green
    `,
  },
}

const SelectInput = ({
  name,
  value,
  defaultValue,
  options = [''],
  onChange = () => {},
  variant = 'default',
  className = '',
}: SelectInputProps) => {
  return (
    <select
      name={name}
      value={value}
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
