import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MainPage from "./components/MainPage.jsx"
import data from "./data.json"

function App() {
  return (
    <div className="app">
      <MainPage data={data}/>
    </div>
  )
}

export default App
