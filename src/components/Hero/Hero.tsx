import "./Hero.css";
import heroImg from "../../assets/hero1.png"; // apni image yahan use karo

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        
        {/* LEFT CONTENT */}
        <div className="hero-left">
          <p className="hero-subtitle">Welcome to Ampliskill</p>

          <h1 className="hero-title">
            A world-class education is applicable for building the future
          </h1>

          <button className="hero-btn">Check events →</button>

          <div className="hero-links">
            <span>Explore our courses →</span>
            <span>Study Online →</span>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="hero-right">
          <div className="image-bg"></div>
          <img src={heroImg} alt="students" />
        </div>

      </div>
    </section>
  );
};

export default Hero;