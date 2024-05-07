import { useContext } from "react"
import { CounterContext } from "./Counter"

export default function CounterButton() {
    console.log("render counter")
    return (
        <>
            <CounterButton2 />
            <CounterButton3 />
        </>
    )
}


export function CounterButton2() {
    const context = useContext(CounterContext)
    return (
        <button
            onClick={() => { 
                console.log("clicked button 2")
                context.onclick(2)
            }}
        >{context.text}</button>
    )
}
export function CounterButton3() {
    const context = useContext(CounterContext)
    return (
        <button
            onClick={() => context.onclick(3)}
        >{context.text}</button>
    )
}

