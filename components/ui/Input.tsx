"use client"

import type { InputHTMLAttributes } from "react"

export type InputProps = {
  label: string
  hint?: string
  error?: string
  containerClassName?: string
} & InputHTMLAttributes<HTMLInputElement>

export default function Input({
  className,
  containerClassName,
  error,
  hint,
  id,
  label,
  name,
  type = "text",
  ...props
}: InputProps) {
  const inputId = id ?? name

  const classes = [
    "block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm transition",
    "placeholder:text-gray-400 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/40",
    "disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray-500",
    className
  ]
    .filter(Boolean)
    .join(" ")

  return (
    <div className={["space-y-1", containerClassName].filter(Boolean).join(" ")}>
      <label htmlFor={inputId} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <input id={inputId} name={name ?? inputId} type={type} className={classes} {...props} />
      {hint && !error ? <p className="text-xs text-gray-500">{hint}</p> : null}
      {error ? <p className="text-xs font-medium text-rose-600">{error}</p> : null}
    </div>
  )
}
