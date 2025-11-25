import NavigationBar from "./NavigationBar"
import { useState } from "react"
import { v4 as uuidv4 } from "uuid"

function NewSession(){
    const workoutsAPI = `https://6924d26482b59600d7217be2.mockapi.io/jamieab98workouts`
    const [exerciseName, setExerciseName] = useState("")
    const [exerciseWeight, setExerciseWeight] = useState(0)
    const [exerciseSets, setExerciseSets] = useState(0)
    const [exerciseReps, setExerciseReps] = useState(0)
    const [exerciseDate, setExerciseDate] = useState("")
    const [workout, setWorkout] = useState([])

    function enterExercise(e){
        e.preventDefault()
        const exercise = {
            "exercise": exerciseName,
            "weight": exerciseWeight,
            "sets": exerciseSets,
            "reps": exerciseReps
        }
        setWorkout([...workout, exercise])
        setExerciseName("")
        setExerciseWeight(0)
        setExerciseSets(0)
        setExerciseReps(0)
    }

    function enterWorkout(){
        fetch(workoutsAPI, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(
                {
                "date": exerciseDate,
                "workout": workout,
                "id": uuidv4()
            })
        })
        .then(response=>response.json())
        .then((data)=>{
            setWorkout([])
            setExerciseDate("")
        })
    }

    return(
        <>
            <NavigationBar/>
            <h2>Nice Workout! What did you do?</h2>
            <form onSubmit={enterExercise}>
                <label htmlFor="exercise">Exercise:</label>
                <input type="text" placeholder="exercise" id="exercise" value={exerciseName} onChange={(e)=>setExerciseName(e.target.value)}></input>
                <label htmlFor="weight">Weight:</label>
                <input type="number" placeholder="weight" id="weight" value={exerciseWeight} onChange={(e)=>setExerciseWeight(e.target.value)}></input>
                <label htmlFor="sets">Sets:</label>
                <input type="number" placeholder="sets" id="sets" value={exerciseSets} onChange={(e)=>setExerciseSets(e.target.value)}></input>
                <label htmlFor="reps">Reps:</label>
                <input type="number" placeholder="reps" id="reps" value={exerciseReps} onChange={(e)=>setExerciseReps(e.target.value)}></input>
                <label htmlFor="date">Date:</label>
                <input type="date" id="date" value={exerciseDate} onChange={(e)=>setExerciseDate(e.target.value)}></input>
                <button type="submit">Submit Exercise</button>
            </form>
            <button type="button" onClick={enterWorkout}>Workout Complete</button>
        </>
    )
}
export default NewSession