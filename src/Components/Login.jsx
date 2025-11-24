import { useNavigate } from "react-router-dom"
import { useState } from "react"

function Login(){
    const LoginAPI = "https://6924d26482b59600d7217be2.mockapi.io/LoginVerification"
    const navigate = useNavigate()
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    
    function handleLogin(e){
        e.preventDefault()
        fetch(LoginAPI)
        .then(response=>response.json())
        .then((data)=>{
            console.log(data)
        })
    }

    return(
        <>
            <h2>Login Page</h2>
            <form onSubmit={handleLogin}>
                <label htmlFor="username">Username: </label>
                <input type="text" placeholder="username" id="username" value={username} onChange={(e)=>setUsername(e.target.value)} autoComplete="username"></input>
                <label htmlFor="password">Password: </label>
                <input type="text" placeholder="password" id="password" value={password} onChange={(e)=>setPassword(e.target.value)}></input>
                <button type="submit">Login</button>
            </form>
        </>
    )
}

export default Login