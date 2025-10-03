import type { ReactNode } from "react"

export type CardProps = {
  children: ReactNode
  className?: string
}

export default function Card({ children, className }: CardProps) {
  const classes = ["rounded-lg border border-gray-200 bg-white p-6 shadow-sm", className]
    .filter(Boolean)
    .join(" ")

  return <section className={classes}>{children}</section>
}
