import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      {/* Upper Navbar */}
      <div className="topbar">
        <div className="topbar-right">
          <span>Home</span>
          <span>About Us</span>
          <span>Resarch</span>
          <span>News</span>
          <span>Events</span>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="navbar">
        {/* Left */}
        <div className="nav-left">
          <h2>LOGO</h2>
        </div>

        {/* Center */}
        <div className="nav-center">
          <span>MDP</span>
          <span>Consulting</span>
          <span>Certification</span>
        </div>

        {/* Right */}
        <div className="nav-right">
          <button className="apply-btn">Apply Now</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;