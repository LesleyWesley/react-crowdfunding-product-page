import React from "react"
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MainPage from "./components/MainPage.jsx"
import data from "./data.json"

function App() {

  const [bookmarked, setBookmarked] = React.useState(false)

  return (
    <div className="app">
      <MainPage data={data} bookmarked={bookmarked}/>
    </div>
  )
}

export default App
