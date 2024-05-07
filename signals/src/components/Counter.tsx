import CounterButton from './CounterButton'
import CounterText from './CounterText'
import { signal, useSignal } from "@preact/signals-react"

export const counter = signal(0)
const counter2 = signal(0)
export default function Counter() {
  console.log("render counter")
  return (
    <div>
        <CounterButton  />
        <CounterText counter={counter} />
        <CounterText counter={counter2} />
    </div>
  )
}