import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header/Header'
import Bottles from './Components/Bottles/Bottles'

function App() {

  return (<div>
    <h1>Water</h1>
    <Header></Header>
    <Bottles></Bottles>
  </div>

  )
}

export default App
