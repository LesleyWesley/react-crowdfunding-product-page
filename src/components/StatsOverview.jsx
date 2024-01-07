import React from "react"

function StatsOverview() {
  return (
    <div className=" stats-overview card">
      <div className="stats-overview--numbers-section">
          <p className="stat"><span className="data-point">$89,914</span>of $100,000 backed</p>
          <div className="divider"></div>
          <p className="stat"><span className="data-point">5,007</span>total backers</p>
          <div className="divider"></div>
          <p className="stat"><span className="data-point">56</span>days left</p>
      </div>
      <div className="stats-overview--outer-bar">
        <div className="stats-overview--inner-bar"></div>
      </div>
    </div>
  )
}

export default StatsOverview
