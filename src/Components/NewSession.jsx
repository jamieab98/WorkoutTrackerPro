import NavigationBar from "./NavigationBar"
import { useState } from "react"
function NewSession(){
    const [exerciseName, setExerciseName] = useState("")
    const [exerciseWeight, setExerciseWeight] = useState(0)
    const [exerciseSets, setExerciseSets] = useState(0)
    const [exerciseReps, setExerciseReps] = useState(0)

    function handleSubmit(e){
        e.preventDefault()
        
    }

    return(
        <>
            <NavigationBar/>
            <h2>Nice Workout! What did you do?</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="exercise">Exercise:</label>
                <input type="text" placeholder="exercise" id="exercise" value={exerciseName} onChange={(e)=>setExerciseName(e.target.value)}></input>
                <label htmlFor="weight">Weight:</label>
                <input type="number" placeholder="weight" id="weight" value={exerciseWeight} onChange={(e)=>setExerciseWeight(e.target.value)}></input>
                <label htmlFor="sets">Sets:</label>
                <input type="number" placeholder="sets" id="sets" value={exerciseSets} onChange={(e)=>setExerciseSets(e.target.value)}></input>
                <label htmlFor="reps">Reps:</label>
                <input type="number" placeholder="reps" id="reps" value={exerciseReps} onChange={(e)=>setExerciseReps(e.target.value)}></input>
                <button type="submit">Submit Workout</button>
            </form>
        </>
    )
}
export default NewSession