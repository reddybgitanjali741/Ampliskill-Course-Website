import React from "react";
import "./TeamHero.css";

const TeamHero = () => {
  return (
    <div className="team-hero-container">
      
      {/* Text Section */}
      <div className="team-hero-text">
        <h1>Team Work Makes The Dream Work!</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur. Est dolor simil condimentum sed
          magna integer semper facilisi nibh volutpat vitae.
        </p>
        <button>Let’s Work Together</button>
      </div>

      {/* Image Section */}
      <div className="team-hero-images">
        <div className="img img1">
          <img src="/images/person1.jpg" alt="team" />
        </div>

        <div className="img img2">
          <img src="/images/person2.jpg" alt="team" />
        </div>

        <div className="img img3">
          <img src="/images/person3.jpg" alt="team" />
        </div>

        <div className="img img4">
          <img src="/images/person4.jpg" alt="team" />
        </div>
      </div>

    </div>
  );
};

export default TeamHero;