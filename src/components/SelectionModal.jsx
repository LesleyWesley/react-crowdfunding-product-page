import React from "react"
import PledgeOption from "./PledgeOption.jsx"
import data from  "../data.json"

function SelectionModal(props){

  const optionElements = data.map(option => {
    return (
      <PledgeOption
        name={option.rewardName}
        pledgeAmount={option.pledgeAmount}
        description={option.rewardDescription}
        remaining={option.rewardsLeft}
        soldOut={option.soldOut}
      />
    )
  })

  return (
    <div className="selection-modal-bg" onClick={props.closeModal}>
      <div className="selection-modal-container">
          <div className="modal-header">
              <h2>Back this project</h2>
              <button type="button" className="modal-close-button" onClick={props.closeModal}>
                <img src="icon-close-modal.svg" alt="close modal" />
              </button>
          </div>
          <p className="modal-description">Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</p>
          <PledgeOption
            name="Pledge with no reward"
            description="Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email."
          />
          {optionElements}
      </div>
    </div>
  )
}

export default SelectionModal
