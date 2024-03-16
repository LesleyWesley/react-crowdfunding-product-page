import React from "react"

function RewardOptionAvailable(props) {
  return (
    <div className={props.soldOut ? "reward-option sold-out" : "reward-option"}>
        <div className="option-heading">
            <h3>{props.name}</h3>
            <span className="option-description">Pledge ${props.pledgeAmount} or more</span>
        </div>
        <p className="option-paragraph">{props.description}</p>
        <div className="option-footer">
          <p>
            <span className="amount-remaining">{props.remaining}</span>
            left
          </p>
          <button type="button" className="select-reward" disabled={props.soldOut} onClick={props.openModal}>
            {props.soldOut ? "Out of Stock" : "Select Reward"}
          </button>
        </div>
    </div>
  )
}

export default RewardOptionAvailable
