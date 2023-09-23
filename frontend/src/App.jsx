import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Viewaccident from './pages/Viewaccident'
import Insurance from './pages/Insurance'
import Submit from './pages/Submit'
import Sidebar from './components/Sidebar'
import Lawbot from './pages/Lawbot'

function App() {
  return (
    <div className="grid grid-cols-4  gap-4">
      <div className="col-span-1">
        <Sidebar />
      </div>
      <div className="col-span-3 ml-10 h-screen">
        <Routes>
          <Route path="/" element={<Viewaccident />} />
          <Route path="/insurance" element={<Insurance />} />
          <Route path="/submit" element={<Submit />} />
          <Route path="/lawbot" element={<Lawbot />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
