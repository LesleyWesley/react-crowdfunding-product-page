import React from "react"
import Header from "../components/Header.jsx"
import ProductHeading from "../components/ProductHeading.jsx"

function MainPage() {
  return (
    <div className="main-page">
        <Header />
        <div className="main-page--main-section">
          <ProductHeading />
        </div>
    </div>
  )
}

export default MainPage
