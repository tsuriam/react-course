import {signal} from "@preact/signals-react"


export function getRandomLocation() {
    return {
        lat: Math.random(),
        lng: Math.random()
    }
}