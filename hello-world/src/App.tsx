import './App.css'
import Counter from './components/Counter'
import Link from './components/Link'


function App() {
  console.log("render app")
  return (
    <>
      <Counter />
      <Link href='#' text='sdadf' />
    </>
  )
}

export default App
