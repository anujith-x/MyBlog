import './App.css'
import HomePage from './main-components/HomePage'
import {Routes, Route} from 'react-router-dom'
import Login from './main-components/Login'
import Signup from './main-components/Signup'
import Profile from './main-components/Profile'
import ProfileHeader from './sub-components/profileHeader'
import CreatePost from './main-components/CreatePost'

function App() {
  

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/createPost' element={<CreatePost/>}/>
      </Routes>
    </>
  )
}

export default App
