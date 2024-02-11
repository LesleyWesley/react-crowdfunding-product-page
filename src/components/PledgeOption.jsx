import React from "react"

function PledgeOption() {
  return (
    <div className="pledge-option-container">
        <div className="pledge-header">
            <div className="selected-container">
                <div className="selected-fill"></div>
            </div>
            <div className="pledge-header-details">
                <h3>Bamboo Stand</h3>
                <span className="option-description">Pledge $25 or more</span>
            </div>
        </div>
        <p>You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campain, and you'll be added to a special Backer member list.</p>
        <p className="remaining-pledges-section">
          <span>101</span>
          left
        </p>
    </div>
  )
}

export default PledgeOption
