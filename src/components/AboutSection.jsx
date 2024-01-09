import React from "react"
import RewardOptionAvailable from "../components/RewardOptionAvailable.jsx"

function AboutSection() {
  return (
    <div className="card about-section">
      <h2>About this project</h2>
      <p className="about-paragraphs">The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve your posture and make you more comfortable while at work, helping you stay focused on the task at hand.
      <br></br>
      <br></br>
      Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer to allow notepads, pens, and USB sticks to be stored under the stand.</p>
      <RewardOptionAvailable />
      <RewardOptionAvailable />
    </div>
  )
}

export default AboutSection
