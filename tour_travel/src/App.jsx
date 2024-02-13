import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './components/routes/Home'
import { Route, Routes } from 'react-router-dom'
import About from './components/routes/About'
import Service from './components/routes/Service'
import Contact from './components/routes/Contact'




function App() {


  return (
    <>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home></Home>} ></Route>
          <Route path='/about' element={<About></About>} ></Route>
          <Route path='/service' element={<Service></Service>}></Route>
          <Route path='/contact' element={<Contact></Contact>}></Route>
        </Routes>


        {/* <Navbar></Navbar> */}
      </div>
    </>
  )
}

export default App
