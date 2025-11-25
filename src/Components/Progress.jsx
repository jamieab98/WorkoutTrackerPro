import NavigationBar from "./NavigationBar"
import { useEffect, useState } from "react"

function Progress(){
    const workoutsAPI = `https://6924d26482b59600d7217be2.mockapi.io/jamieab98workouts`
    const [searchedExercise, setSearchedExercise] = useState("")
    const [workoutData, setWorkoutData] = useState([])
    
    useEffect(()=>{
        fetch(workoutsAPI)
        .then(response=>response.json())
        .then((data)=>{
            setWorkoutData(data)
            console.log(data)
        })
    }, [])

    //ToDo: Make it so the user can search by a specific exercise and it'll display all of those workouts in chronological order

    return(
        <>
            <NavigationBar/>
            <h2>Progress Page</h2>
            <form>
                <label htmlFor="exercise">Exercise</label>
                <input type="text" placeholder="exercise" value={searchedExercise} id="exercise" onChange={(e)=>setSearchedExercise(e.target.value)}/>
            </form>
        </>
    )
}
export default Progress