import type { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  value: string
}

export default function Input({ value, ...rest }: InputProps) {
  return (
    <input
      id="input"
      type="text"
      value={value}
      {...rest}
      className="w-[250px] border-gray-200 border-rounded bg-transparent px-4 py-2 text-center outline-none dark:border-gray-700 active:outline-none"
    />
  )
}
