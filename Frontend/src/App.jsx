import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
// import Form from './Components/CreateForm'
import Form from './Components/Form'
import ShowData from './Components/ShowData'
const App = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Form/>}/>
        <Route path='/show' element={<ShowData/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App