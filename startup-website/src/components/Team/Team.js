import React from 'react';
import "./Team.css";
import { peg, guerra, alex, janet } from "../../images"

const Team  = () => {
  return (
    <section className="team">
      <div className="team-members">
       <img src={peg} alt="CEO"></img>
        <img src={guerra} alt="CTO"></img>
         <img src={alex} alt="designer"></img>
          <img src={janet} alt="developer"></img>
          </div>
        <a href="#Learn More" className="learnmore-btn">Learn More</a>   
    </section>
  )
}

export default Team;