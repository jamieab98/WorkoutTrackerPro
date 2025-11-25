import NavigationBar from "./NavigationBar"
import { UsernameContext } from "../UsernameContext"
import { useContext, useEffect} from "react"
import DailyWorkout from "./DailyWorkout"

function Home(){
    const {username, workoutData, setWorkoutData} = useContext(UsernameContext)
    const workoutsAPI = `https://6924d26482b59600d7217be2.mockapi.io/jamieab98workouts`
    
    useEffect(()=>{
        fetch(workoutsAPI)
        .then(response=>response.json())
        .then((data)=>{
            setWorkoutData(data)
        })
    }, [])

    const sortedWorkoutData = [...workoutData].sort((b,a)=>new Date(a.date) - new Date(b.date))    

    return(
        <>
            <NavigationBar/>
            <h2>Home Page</h2>
            <p>Welcome!</p>
            {sortedWorkoutData.map((day)=>(
                <DailyWorkout day={day} key={day.id}/>
            ))}
        </>
    )
}
export default Home