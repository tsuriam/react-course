
export default function CounterText(props: {counter: number}) {
  console.log("render text", props.counter)
  return (
    <div>{props.counter}</div>
  )
}
