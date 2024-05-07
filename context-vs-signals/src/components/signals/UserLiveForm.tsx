import UserInput from './UserInput'
import UserText from '../UserText'
import { signal } from "@preact/signals-react"

export const username = signal("some user")

export default function UserLiveForm() {
    return (
        <>
            <UserInput />
            <UserText currentUser={username} />
        </>
    )
}
