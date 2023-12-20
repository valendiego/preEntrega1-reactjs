import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import Banner from './components/Banner/Banner'
import Beneficios from './components/Beneficios/Beneficios'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {

  return (
    <>
      <NavBar />
      <Banner />
      <ItemListContainer greeting={"𝔅𝔦𝔢𝔫𝔳𝔢𝔫𝔦𝔡𝔬𝔰 𝔞 𝔊𝔬𝔱𝔥 𝔖𝔱𝔬𝔯𝔢"} />
      <Beneficios />
    </>
  )
}

export default App
