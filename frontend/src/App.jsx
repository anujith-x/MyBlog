import { useState } from 'react'
import './App.css'
import HomePage from './main-components/HomePage'
import {Routes, Route} from 'react-router-dom'
import Login from './main-components/Login'
import Signup from './main-components/Signup'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
    </>
  )
}

export default App
