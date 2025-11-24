import Login from "./Components/Login"
import { BrowserRouter, Routes, Route } from "react-router-dom"
function App(){

  return(
    <>
      <BrowserRouter>
        <Routes>
          <h1>Workout Tracker Pro</h1>
          <Route path="/" element={<Login/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/newsession" element={<NewSession/>} />
          <Route path="/progress" element={<Progress/>} />
          <Route path="/editsession" element={<EditSession/>} />
          <Route path="/settings" element={<Settings/>} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App