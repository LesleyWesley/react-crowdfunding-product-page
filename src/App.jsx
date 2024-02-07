import React from "react"
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MainPage from "./components/MainPage.jsx"
import SelectionModal from "./components/SelectionModal.jsx"
import data from "./data.json"

function App() {

  const [bookmarked, setBookmarked] = React.useState(false)

  function toggleBookmark() {
    setBookmarked(prevBookmark => !prevBookmark)
  }

  return (
    <div className="app">
      <MainPage data={data} bookmarked={bookmarked} handleClick={toggleBookmark}/>
      <SelectionModal />
    </div>
  )
}

export default App
