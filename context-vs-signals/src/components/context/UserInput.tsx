import { useContext } from "react"
import { UserLiveFormContext } from "./UserLiveForm"

export default function UserInput() {
    const context = useContext(UserLiveFormContext)
    return (
        <>
            <input value={context.currentUser} onChange={(e) => {
                context.onChange(e.target.value)
            }} />
        </>
    )
}
