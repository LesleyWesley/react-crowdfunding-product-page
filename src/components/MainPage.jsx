import React from "react"
import Header from "../components/Header.jsx"
import ProductHeading from "../components/ProductHeading.jsx"
import StatsOverview from "../components/StatsOverview.jsx"

function MainPage() {
  return (
    <div className="main-page">
        <Header />
        <div className="main-page--main-section">
          <ProductHeading />
          <StatsOverview />
        </div>
    </div>
  )
}

export default MainPage
