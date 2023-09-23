import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Viewaccident from './pages/Viewaccident'
import Insurance from './pages/Insurance'
import Submit from './pages/Submit'
import Sidebar from './components/Sidebar'

function App() {
  return (
    <div >
      <Sidebar>
      <Routes>
        <Route path='/' element={<Viewaccident/>}/>
        <Route path='/insurance' element={<Insurance/>}/>
        <Route path='/submit' element={<Submit/>}/>
      </Routes>
      </Sidebar>
    </div>
  )
}

export default App
