import "../Styling/DailyWorkout.css"
import { v4 as uuid4v } from "uuid"
function DailyWorkout({day}){
    const exercises = (day.workout)

    return(
        <div className="workoutcard">
        <div className="dailyworkout">
            <div className="date">Date: {day.date}</div>
            <div className="exerciseinfocontainer">
            {exercises.map((e)=>(
                <div key={uuid4v()} className="exercise">
                    <div className="exerciseinfo">{e.exercise}</div>
                    <div className="exerciseinfo">{e.weight} lbs</div>
                    <div className="exerciseinfo">{e.sets} sets</div>
                    <div className="exerciseinfo">{e.reps} reps</div>
                </div>
            ))}
            </div>
        </div>
        </div>
    )
}
export default DailyWorkout