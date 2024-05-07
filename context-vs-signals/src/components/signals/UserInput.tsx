import { username } from "./UserLiveForm"

export default function UserInput() {
    return (
        <>
            <input defaultValue={username.value} onChange={(e) => {
                username.value = e.target.value
            }} />
        </>
    )
}
