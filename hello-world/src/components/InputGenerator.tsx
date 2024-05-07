import { useState } from 'react'

function generatePass() {
    return crypto.randomUUID().replace("-","").slice(0,4);
}

export default function InputGenerator() {
    const [value, setValue] = useState(generatePass())
  return ( 
    <input value={value} onClick={() => {
        setValue(generatePass())
    }} />
  )
}
