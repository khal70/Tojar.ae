"use client"

import { forwardRef, useId } from "react"
import type { InputHTMLAttributes } from "react"

export type InputProps = {
  label: string
  hint?: string
  error?: string
  containerClassName?: string
} & InputHTMLAttributes<HTMLInputElement>

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      containerClassName,
      error,
      hint,
      id,
      label,
      name,
      type = "text",
      ...props
    },
    ref
  ) => {
    const autoId = useId()
    const inputId = id ?? name ?? autoId

    const {
      ["aria-describedby"]: ariaDescribedBy,
      ["aria-invalid"]: ariaInvalid,
      ...rest
    } = props

    const hintId = hint ? `${inputId}-hint` : undefined
    const errorId = error ? `${inputId}-error` : undefined

    const describedBy = [
      error ? errorId : undefined,
      hint && !error ? hintId : undefined,
      ariaDescribedBy
    ]
      .filter(Boolean)
      .join(" ") || undefined

    const resolvedAriaInvalid = error ? true : ariaInvalid

    const classes = [
      "block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm transition",
      "placeholder:text-gray-400 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/40",
      "disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray-500",
      className
    ]
      .filter(Boolean)
      .join(" ")

    const containerClasses = ["space-y-1", containerClassName]
      .filter(Boolean)
      .join(" ")

    return (
      <div className={containerClasses}>
        <label htmlFor={inputId} className="block text-sm font-medium text-gray-700">
          {label}
        </label>
        <input
          ref={ref}
          id={inputId}
          name={name ?? inputId}
          type={type}
          className={classes}
          aria-describedby={describedBy}
          aria-invalid={resolvedAriaInvalid}
          {...rest}
        />
        {hint && !error ? (
          <p id={hintId} className="text-xs text-gray-500">
            {hint}
          </p>
        ) : null}
        {error ? (
          <p id={errorId} className="text-xs font-medium text-rose-600">
            {error}
          </p>
        ) : null}
      </div>
    )
  }
)

Input.displayName = "Input"

export default Input
