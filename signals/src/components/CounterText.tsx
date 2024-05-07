import {Signal} from "@preact/signals-react"

export default function CounterText(props: {counter: Signal<number> | number}) {
  console.log("render  text", props.counter)
  return (
    <div>{props.counter}</div>
  )
}
