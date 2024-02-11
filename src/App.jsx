import React from "react"
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MainPage from "./components/MainPage.jsx"
import SelectionModal from "./components/SelectionModal.jsx"
import data from "./data.json"

function App() {

  const [bookmarked, setBookmarked] = React.useState(false)
  const [modalOpen, setModalOpen] = React.useState(false)

  function toggleBookmark() {
    setBookmarked(prevBookmark => !prevBookmark)
  }

  function openModal() {
    setModalOpen(true)
  }

  function closeModal() {
    setModalOpen(false)
  }

  return (
    <div className="app">
      <MainPage
        data={data}
        bookmarked={bookmarked}
        toggleBookmark={toggleBookmark}
        openModal={openModal}
      />
      {modalOpen && <SelectionModal closeModal={closeModal}/>}
    </div>
  )
}

export default App
