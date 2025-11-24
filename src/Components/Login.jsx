import { useNavigate } from "react-router-dom"

function Login(){
    const navigate = useNavigate()
    function handleLogin(){
        navigate("/home")
    }

    return(
        <>
            <h2>Login Page</h2>
            <button>Login</button>
        </>
    )
}

export default Login