import NavigationBar from "./NavigationBar"
import { UsernameContext } from "../UsernameContext"
import { useContext, useEffect, useState } from "react"
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
    
    //ToDo: Make it so the workouts load in order of date and not by id number//

    return(
        <>
            <NavigationBar/>
            <h2>Home Page</h2>
            <p>Welcome!</p>
            {workoutData.map((day)=>(
                <DailyWorkout day={day} key={day.id}/>
            ))}
        </>
    )
}
export default Home