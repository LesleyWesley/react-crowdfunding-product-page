import React from "react"

function PledgeOption(props) {
  return (
    <div className={props.soldOut ? "pledge-option-container sold-out" : "pledge-option-container"}>
        <div className="pledge-header">
            <div className="selected-container">
                <div className="selected-fill"></div>
            </div>
            <div className="pledge-header-details">
                <h3>{props.name}</h3>
                {props.pledgeAmount && <span className="option-description">Pledge {props.pledgeAmount} or more</span>}
            </div>
        </div>
        <p>{props.description}</p>
        {props.pledgeAmount && <p className="remaining-pledges-section">
          <span>{props.remaining}</span>
          left
        </p>}
    </div>
  )
}

export default PledgeOption
