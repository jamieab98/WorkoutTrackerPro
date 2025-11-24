import NavigationBar from "./NavigationBar"
import { Link } from "react-router-dom"
function Settings(){

    return(
        <>
            <NavigationBar/>
            <h2>Settings Page</h2>
            <Link to="/">Log Out</Link>
        </>
    )
}
export default Settings