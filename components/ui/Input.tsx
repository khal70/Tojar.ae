'use client'
import React from 'react'

type InputProps = {
  label: string
  type?: string
  name: string
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  className?: string
}

export default function Input({ label, type = 'text', name, value, onChange, className = '' }: InputProps) {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium mb-1" htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        className={`w-full border px-3 py-2 rounded ${className}`}
      />
    </div>
  )
}
