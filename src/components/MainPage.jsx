import React from "react"
import Header from "../components/Header.jsx"
import ProductHeading from "../components/ProductHeading.jsx"
import StatsOverview from "../components/StatsOverview.jsx"
import AboutSection from "../components/AboutSection.jsx"


function MainPage(props) {
  return (
    <div className="main-page">
        <Header />
        <div className="main-page--main-section">
          <ProductHeading
            bookmarked={props.bookmarked}
            toggleBookmark={props.toggleBookmark}
            openModal={props.openModal}
          />
          <StatsOverview />
          <AboutSection
            data={props.data}
            openModal={props.openModal}
          />
        </div>
    </div>
  )
}

export default MainPage
