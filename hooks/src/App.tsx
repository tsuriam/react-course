import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState({inputA: "", inputB: ""})
  const inputANumric = Number.isNaN(+data.inputA) ? 0 : +data.inputA;
  const inputBNumric = Number.isNaN(+data.inputB) ? 0 : +data.inputB;
  const result = inputANumric + inputBNumric

  useEffect(() =>{
    if(Number.isNaN(+data.inputA)){
      alert("Invalid number for A")
    }
  }, [data.inputA])

  useEffect(() =>{
    if(Number.isNaN(+data.inputB)){
      alert("Invalid param for B")
    }
  }, [data.inputB])

  

  return (
    <>
      <input value={data.inputA} onChange={(e) => {
        setData({...data, inputA: e.target.value})
      }} />
      <input value={data.inputB} onChange={(e) => {
        setData({...data, inputB: e.target.value})
      }} />
      <div>{result}</div>
    </>
  )
}

export default App
