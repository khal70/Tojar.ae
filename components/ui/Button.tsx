"use client"

import type { ButtonHTMLAttributes, ReactNode } from "react"

export type ButtonVariant = "primary" | "secondary" | "ghost"

export const buttonBaseClasses =
  "inline-flex items-center justify-center gap-2 rounded-md border text-sm font-medium shadow-sm transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-60"

export const buttonVariantClasses: Record<ButtonVariant, string> = {
  primary: "border-transparent bg-emerald-600 text-white hover:bg-emerald-500 focus-visible:outline-emerald-600",
  secondary:
    "border-gray-300 bg-white text-gray-900 hover:bg-gray-50 focus-visible:outline-emerald-600",
  ghost:
    "border-transparent bg-transparent text-gray-700 hover:bg-gray-100 focus-visible:outline-emerald-600"
}

export type ButtonProps = {
  children: ReactNode
  variant?: ButtonVariant
  className?: string
} & ButtonHTMLAttributes<HTMLButtonElement>

export default function Button({
  children,
  className,
  variant = "primary",
  type = "button",
  ...props
}: ButtonProps) {
  const classes = [buttonBaseClasses, buttonVariantClasses[variant], className]
    .filter(Boolean)
    .join(" ")

  return (
    <button type={type} className={classes} {...props}>
      {children}
    </button>
  )
}
