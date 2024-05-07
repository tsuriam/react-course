import {signal} from "@preact/signals-react"
import { getRandomLocation } from "./location";

export function createCar(name: string) {
    return {
        name: name,
        location: getRandomLocation(),
        updateLocation(){
            this.location = getRandomLocation();
        }
    }
}