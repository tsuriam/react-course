import { createContext, useState } from 'react'
import CounterButton from './CounterButton'
import CounterText from './CounterText' 

export const CounterContext = createContext({
  onclick: (_num: number) => {},
  text: "hii1"
})

export default function Counter() {
  const [counter, setCounter] = useState(0)
  const onclickCounter = (num: number) => {
    setCounter(counter + num)
    console.log("onclick", counter)
  }
  console.log("render counter")
  return (
    <div>
      <CounterContext.Provider value={{onclick: onclickCounter, text: "hii"}}>
        <CounterButton  />
        <CounterText counter={counter} />
      </CounterContext.Provider>
    </div>
  )
}