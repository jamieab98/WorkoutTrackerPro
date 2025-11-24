import { useNavigate } from "react-router-dom"

function Login(){
    const LoginAPI = "https://6924d26482b59600d7217be2.mockapi.io/LoginVerification"
    const navigate = useNavigate()
    
    function handleLogin(){
        fetch(LoginAPI)
        .then(response=>response.json())
        .then((data)=>{
            console.log(data)
        })
    }

    return(
        <>
            <h2>Login Page</h2>
            <button onClick={handleLogin}>Login</button>
        </>
    )
}

export default Login