import React from "react"

function ProductHeading (props) {
  return (
    <div className="product-heading-section">
      <img src="logo-mastercraft.svg" alt="" className="logo"/>
      <div className="card product-heading--main">
          <h1>Mastercraft Bamboo Monitor Riser</h1>
          <p>A beautifully & handcrafted monitor stand to reduce neck and eye strain.</p>
          <div className="product-heading--button-section">
              <button type="button" className="backing-button">Back this project</button>
              <button type="button" className="bookmark-button" onClick={props.handleClick}>
                  <img src={props.bookmarked ? "icon-bookmark-active.svg" : "icon-bookmark.svg"} alt="bookmark" />
                  <span className={props.bookmarked ? "bookmark-heading bookmarked" : "bookmark-heading"}>{props.bookmarked ? "Bookmarked" : "Bookmark"}</span>
              </button>
          </div>
      </div>
    </div>
  )
}

export default ProductHeading
