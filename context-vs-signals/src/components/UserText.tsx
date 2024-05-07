import { Signal } from "@preact/signals-react"

export default function UserText(props: { currentUser: string | Signal<string> }) {
    return (
        <div>{props.currentUser + "a"}</div>
    )
}
