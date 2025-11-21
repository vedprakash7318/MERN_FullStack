import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import Form from './Components/CreateForm'
import Form from './Components/Form'
import File from './Components/File'
import Dashboard from './Components/Dashboard'
const App = () => {
  return (
    <>
      <Router>
        <Dashboard>
          <Routes>
            {/* <Route path='/' element={<Dashboard/>}/> */}
            <Route path='/form' element={<Form />} />
            <Route path='/about' element={<File />} />
          </Routes>
        </Dashboard>
      </Router>
    </>
  )
}

export default App