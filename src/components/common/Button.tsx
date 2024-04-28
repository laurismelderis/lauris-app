'use client'

import React from 'react'

interface ButtonProps {
  children?: JSX.Element | string
  onClick?: () => void
  type?: 'primary' | 'error'
  submit?: boolean
  name?: string
  value?: string
}

const Button = ({
  children,
  onClick,
  type = 'primary',
  submit = false,
  name,
  value,
}: ButtonProps) => {
  const style = {
    primary: 'border-light-blue hover:bg-light-blue',
    error: 'border-red hover:bg-red',
  }

  return (
    <button
      type={submit ? 'submit' : 'button'}
      className={`text-left border-2  p-2 w-max ${style[type]}`}
      onClick={onClick}
      name={name}
      value={value}
    >
      {children}
    </button>
  )
}

export default Button
