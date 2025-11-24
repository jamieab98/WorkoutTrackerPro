import { useNavigate } from "react-router-dom"
import { useState } from "react"
import "../Styling/Login.css"

function Login(){
    const LoginAPI = "https://6924d26482b59600d7217be2.mockapi.io/LoginVerification"
    const navigate = useNavigate()
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [errorMessage, setErrorMessage] = useState("")
    
    function handleLogin(e){
        e.preventDefault()
        setErrorMessage("")
        fetch(LoginAPI)
        .then(response=>response.json())
        .then((data)=>{
            const userdata=(data.find(d=>d.username===username))
            const existingUsernames=(data.map(d=>d.username))
            if(!existingUsernames.includes(username)){
                setErrorMessage("username does not exist")
            }
            else if(username===userdata.username && password===userdata.password){
                navigate("/home")
            }
            else if(username===userdata.username && password!==userdata.password){
                setErrorMessage("incorrect password")
            }
            else{
                setErrorMessage("failed login")
            }
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
            <p className="errorMessage">{errorMessage}</p>
        </>
    )
}

export default Login