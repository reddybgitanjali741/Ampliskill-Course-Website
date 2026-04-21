import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <h1>
          Amplify Your Skills <br />
          <span>Accelerate Your Career</span>
        </h1>

        <p>Industry-aligned programs with mentorship.</p>

        <div className="hero-cta">
          <button className="btn btn--primary">Explore Courses</button>

          <button className="btn btn--ghost">
            Free Counseling <FontAwesomeIcon icon="arrow-right" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
