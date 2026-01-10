import { useState } from 'react'

interface CounterProps {
  initial: number
}

export default function Counter({ initial }: CounterProps) {
  const [count, setCount] = useState(initial)

  const inc = () => setCount(count + 1)
  const dec = () => setCount(count - 1)

  return (
    <div>
      {count}
      <button className="inc" onClick={inc}>
        +
      </button>
      <button className="dec" onClick={dec}>
        -
      </button>
    </div>
  )
}
