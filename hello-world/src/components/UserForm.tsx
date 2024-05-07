import { useState } from 'react'

export default function UserForm() {
    const [data, setData] = useState({username: "", password: ""});  
    console.log("render", data)
    return (
        <>
            <input value={data.username} onChange={(e) => {
                setData({ ...data, username: e.target.value })
            }} />
             <input value={data.password} onChange={(e) => {
                setData({ ...data, password: e.target.value })
            }} />
        </>
    )
}
