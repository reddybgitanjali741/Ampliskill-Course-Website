"use client";

import "./Pricing.css";

interface PricingCardProps {
  name: string;
  badge?: string;
  price: number;
  period: "mo" | "year";
  features: string[];
  featured?: boolean;
  isYearly?: boolean;
}

export default function PricingCard({
  name,
  badge,
  price,
  period,
  features,
  featured = false,
  isYearly = false,
}: PricingCardProps) {
  return (
    <div className={`pricing-card ${featured ? "featured" : ""}`}>
      {badge && <div className="pricing-badge">{badge}</div>}

      <div className="card-header">
        <h3 className="card-title">{name}</h3>
        <div className={`price-wrapper ${isYearly ? "yearly" : "monthly"}`}>
          <span className="price-currency">₹</span>
          <span className="price-amount">{price.toLocaleString()}</span>
          <span className="price-period">/{period}</span>
        </div>
      </div>

      <div className="card-body">
        <ul className="features-list">
          {features.map((feature, index) => (
            <li key={index} className="feature-item">
              <svg
                className="feature-icon"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M16.707 5.293a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 1.414-1.414L8 12.586l7.293-7.293a1 1 0 0 1 1.414 0z"
                  fill="currentColor"
                />
              </svg>
              <span className="feature-text">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="card-footer">
        <button
          className={`cta-button ${featured ? "primary" : "secondary"}`}
          onClick={() => {
            console.log(`Enrolled in ${name} plan`);
          }}
        >
          {featured ? "Enroll Now" : "Get Started"}
        </button>
      </div>
    </div>
  );
}
