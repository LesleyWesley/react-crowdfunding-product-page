import React from "react"
import PledgeOption from "./PledgeOption.jsx"

function SelectionModal(){
  return (
    <div className="selection-modal-bg">
      <div className="selection-modal-container">
          <div className="modal-header">
              <h2>Back this project</h2>
              <img src="icon-close-modal.svg" alt="close modal" />
          </div>
          <p className="modal-description">Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</p>
          <PledgeOption />
      </div>
    </div>
  )
}

export default SelectionModal
