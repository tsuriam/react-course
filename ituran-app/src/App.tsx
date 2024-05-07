import { signal } from "@preact/signals-react"
import './App.css'
import { createCar } from "./lib/car"
import Map from "./components/Map"
import Table from "./components/Table"
import { useEffect } from "react"
import {useSignals} from "@preact/signals-react/runtime"

export const carInfo = signal([0])

function App() {
  useSignals()

  useEffect(() => {
    // setInterval(() => {
    //   // carInfo.value.forEach((info) => {
    //   //   info.updateLocation()
    //   // })
    //   // console.log(carInfo.value[0].location)
    //   // carInfo.name.value += "a"
    //   // carInfo.updateLocation()
    //   console.log(carInfo)
    // }, 1000)
  }, [])

  return (
    <>
      <button onClick={(e) => carInfo.value = carInfo.value.with(0,carInfo.value[0]+1)} />
      <Map />
      {/* <Table /> */}
    </>
  )
}

export default App

