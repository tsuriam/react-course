import  { useState } from 'react'

export default function TextAdder() {
    const [text, setText] = useState("")
  return (
    <div onClick={() => {
        setText(text+"a")
    }}>{text}a</div>
  )
}
