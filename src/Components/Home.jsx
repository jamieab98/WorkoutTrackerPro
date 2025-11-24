import NavigationBar from "./NavigationBar"
import { UsernameContext } from "../UsernameContext"
import { useContext, useEffect } from "react"
function Home(){
    const {username} = useContext(UsernameContext)
    const workoutsAPI = `https://6924d26482b59600d7217be2.mockapi.io/${username}workouts`
    useEffect(()=>{
        fetch(workoutsAPI)
        .then(response=>response.json())
        .then(data=>console.log(data))
    })

    return(
        <>
            <NavigationBar/>
            <h2>Home Page</h2>
            <p>Welcome {username}!</p>
        </>
    )
}
export default Home