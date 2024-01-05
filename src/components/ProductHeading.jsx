import React from "react"

function ProductHeading () {
  return (
    <div className="product-heading-section">
      <img src="logo-mastercraft.svg" alt="" className="logo"/>
      <div className="product-heading--main card">
          <h1>Mastercraft Bamboo Monitor Riser</h1>
          <p>A beautifully & handcrafted monitor stand to reduce neck and eye strain.</p>
          <div className="product-heading--button-section">
              <button type="button" className="backing-button">Back this project</button>
              <button type="button" className="bookmark-button">
                  <img src="icon-bookmark.svg" alt="bookmark" />
                  <span className="bookmark-heading">Bookmark</span>
              </button>
          </div>
      </div>
    </div>
  )
}

export default ProductHeading
