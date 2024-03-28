import React from 'react'
import { Route , Routes} from 'react-router'
import Register from './pages/Register'
import Home from './pages/Home'
import Login from './pages/Login'
import Profile from './pages/Profile'
import AddBlog from './pages/AddBlog'
import NavBar from './components/NavBar'

const App = () => {
  return (
    <>
      <NavBar/>
      <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/register' element={<Register/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/addblog' element={<AddBlog/>}></Route>
          <Route path='/profile' element={<Profile/>}></Route>        
      </Routes>
    </>
  )
}

export default App
