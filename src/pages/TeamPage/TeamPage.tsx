import "./TeamPage.css";

import t1 from "../../assets/team1.jpg";
import t2 from "../../assets/team2.jpg";

const teamData = [
  { id: 1, name: "Julia Schleifer", role: "Sr. Product Designer", img: t1 },
  { id: 2, name: "Martin Donin", role: "Junior Designer", img: t2 },
  { id: 3, name: "Jordyn Septimus", role: "Brand Designer", img: t1 },
  { id: 4, name: "Ryan Gouse", role: "Senior Brand Designer", img: t2 },
];

export default function TeamPage() {
  return (
    <div className="tp-container">

      {/* ================= HERO ================= */}
      <section className="tp-hero-clean">
        <div className="tp-hero-inner">

          {/* LEFT */}
          <div className="tp-hero-left">
            <h1>Team Work Makes The Dream Work!</h1>

            <p>
              We are a group of passionate professionals building high-quality
              learning experiences.
            </p>

            <button className="tp-btn-clean">Let's Work Together</button>
          </div>

          {/* RIGHT */}
          <div className="tp-hero-right">
            <img src={t2} alt="team" />
          </div>

        </div>
      </section>

      {/* ================= TEAM ================= */}
      <section className="tp-team">
        <h2>Meet Our Team</h2>

        <div className="tp-filters">
          <span className="active">Design</span>
          <span>Development</span>
          <span>Marketing</span>
          <span>Product Manager</span>
        </div>

        <div className="tp-grid">
          {teamData.map((member) => (
            <div className="tp-card" key={member.id}>
              <img src={member.img} alt={member.name} />
              <h3>{member.name}</h3>
              <p>{member.role}</p>

              <div className="tp-icons">
                <span>🔗</span>
                <span>🐦</span>
                <span>💼</span>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}