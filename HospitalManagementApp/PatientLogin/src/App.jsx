import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Register from './Register'
import SignIn from './SignIn'
import { BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {

  return (
      <BrowserRouter>
      <Routes>
        <Route path='/Register' element={<Register />}></Route>
        <Route path='/SignIn' element={<SignIn />}></Route>
      </Routes>
      </BrowserRouter>
  )
}

export default App
