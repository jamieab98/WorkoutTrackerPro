import { Link } from "react-router-dom"
import "../Styling/NavigationBar.css"
function NavigationBar(){

    return(
        <>
            <Link to="/home" className="link">Home</Link>
            <Link to="/newsession" className="link">New Session</Link>
            <Link to="/progress" className="link">Progress</Link>
            <Link to="/editsession" className="link">Edit Session</Link>
            <Link to="/settings" className="link">Settings</Link>
        </>
    )
}
export default NavigationBar