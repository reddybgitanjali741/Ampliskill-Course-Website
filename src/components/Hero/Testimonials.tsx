import { useState, useEffect } from "react";

const data = ["Amazing course!", "Loved it!", "Best platform!"];

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setIndex((prev) => (prev + 1) % data.length);
    }, 3000);

    return () => clearInterval(t);
  }, []);

  return (
    <section className="testimonials">
      <h2>{data[index]}</h2>
    </section>
  );
};

export default Testimonials;
