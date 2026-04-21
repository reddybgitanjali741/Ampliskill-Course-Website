import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const data = [
  { q: "What is Ampliskill?", a: "Learning platform" },
  { q: "Placement?", a: "Yes supported" },
];

const FAQ = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="faq">
      {data.map((item, i) => (
        <div key={i}>
          <h3 onClick={() => setOpen(open === i ? null : i)}>
            {item.q}
            <FontAwesomeIcon icon="chevron-down" />
          </h3>
          {open === i && <p>{item.a}</p>}
        </div>
      ))}
    </section>
  );
};

export default FAQ;
