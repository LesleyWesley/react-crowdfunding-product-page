import React from "react"

function RewardOptionAvailable() {
  return (
    <div className="reward-option">
        <div className="option-heading">
            <h3>Bamboo Stand</h3>
            <span className="option-description">Pledge $25 or more</span>
        </div>
        <p className="option-paragraph">You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you'll be added to a special Backer member list.</p>
        <div className="option-footer">
          <p>
            <span className="amount-remaining">101</span>
            left
          </p>
          <button type="button" className="select-reward">Select Reward</button>
        </div>
    </div>
  )
}

export default RewardOptionAvailable
