import NavigationBar from "./NavigationBar"
import ExerciseDisplay from "./ExerciseDisplay"
import { useContext, useEffect, useState } from "react"
import { UsernameContext } from "../UsernameContext"
import {v4 as uuidv4} from "uuid"

function Progress(){
    const workoutsAPI = `https://6924d26482b59600d7217be2.mockapi.io/jamieab98workouts`
    const {workoutData, setWorkoutData} = useContext(UsernameContext)
    const [searchedExercise, setSearchedExercise] = useState("")
    const [listOfExercises, setListOfExercises] = useState([])
    
    useEffect(()=>{
        fetch(workoutsAPI)
        .then(response=>response.json())
        .then((data)=>{
            setListOfExercises([])
            data.map((d)=>{
                d.workout.map((ex)=>{
                    setListOfExercises(prev=>[...prev, ex])
                })
            })
            console.log(data)
        })
    }, [])

    function test(){
        console.log(listOfExercises)
    }


    //ToDo: Make it so the user can search by a specific exercise and it'll display all of those workouts in chronological order

    return(
        <>
            <NavigationBar/>
            <h2>Progress Page</h2>
            <form>
                <label htmlFor="exercise">Exercise</label>
                <input type="text" placeholder="exercise" value={searchedExercise} id="exercise" onChange={(e)=>setSearchedExercise(e.target.value)}/>
            </form>
            {listOfExercises.map((exercise)=>(
                <ExerciseDisplay key={uuidv4()} exercise={exercise}/>
            ))}
            <button onClick={test}>Testing</button>
        </>
    )
}
export default Progress