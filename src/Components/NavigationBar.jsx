import { Link } from "react-router-dom"
function NavigationBar(){

    return(
        <>
            <Link to="/home">Home</Link>
            <Link to="/newsession">New Session</Link>
            <Link to="/progress">Progress</Link>
            <Link to="/editsession">Edit Session</Link>
            <Link to="/settings">Settings</Link>
        </>
    )
}
export default NavigationBar