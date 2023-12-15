import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import Banner from './components/Banner/Banner'
import Beneficios from './components/Beneficios/Beneficios'

function App() {

  return (
    <>
      <NavBar />
      <Banner/>
      <Beneficios/>
    </>
  )
}

export default App
