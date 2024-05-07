import { counter } from "./Counter"

export default function CounterButton() {
    console.log("render counter")
    return (
        <>
            <CounterButton2 />
        </>
    )
}


export function CounterButton2() {
    return (
        <button
            onClick={() => { 
                console.log("clicked button 2")
                counter.value++
            }}
        >hii</button>
    )
}
