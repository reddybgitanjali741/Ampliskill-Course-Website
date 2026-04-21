import { useEffect, useState } from "react";

const data = [5000, 50, 200, 92];

const Stats = () => {
  const [count, setCount] = useState(data.map(() => 0));

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) =>
        prev.map((val, i) =>
          val < data[i] ? val + Math.ceil(data[i] / 50) : val,
        ),
      );
    }, 40);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="stats-bar">
      <div className="container">
        {count.map((c, i) => (
          <div key={i}>
            <h2>{c}</h2>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
