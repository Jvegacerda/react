import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Producto from '../components/navbar'
import Home from '../components/home'
import Footer from '../components/footer'
import Register from '../components/Register'
import Login from '../components/Login'

function App() {

  return (
    <>
      <Producto></Producto>
      {/* <Home></Home> */}
      <Register></Register>
      <Login></Login>
      <Footer></Footer>
      
    </>
  )
}

export default App
