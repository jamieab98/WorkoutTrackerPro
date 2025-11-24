import Login from "./Components/Login"
import Home from "./Components/Home"
import NewSession from "./Components/NewSession"
import Progress from "./Components/Progress"
import EditSession from "./Components/EditSession"
import Settings from "./Components/Settings"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { UsernameContext } from "./UsernameContext"
import { useState } from "react"
function App(){
  const [username, setUsername] = useState("")

  return(
    <>
      <UsernameContext.Provider value={{username, setUsername}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/newsession" element={<NewSession/>} />
          <Route path="/progress" element={<Progress/>} />
          <Route path="/editsession" element={<EditSession/>} />
          <Route path="/settings" element={<Settings/>} />
        </Routes>
      </BrowserRouter>
      </UsernameContext.Provider>
    </>
  )
}

export default App