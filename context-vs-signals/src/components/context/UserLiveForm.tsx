import { createContext, useState } from 'react'
import UserInput from './UserInput'
import UserText from '../UserText'

export const UserLiveFormContext = createContext({
    onChange: (_newUsername: string) => { },
    currentUser: ""
})

export default function UserLiveForm() {
    const [username, setUserName] = useState("")
    const updateUser = (newUsername: string) => {
        setUserName(newUsername)
    }
    return (
        <>
            <UserLiveFormContext.Provider value={{
                onChange: updateUser,
                currentUser: username
            }}>
                <UserInput />
                <UserText currentUser={username} />
            </UserLiveFormContext.Provider>
        </>
    )
}
