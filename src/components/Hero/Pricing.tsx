"use client";

import { useState, useEffect, useRef } from "react";
import PricingCard from "./PricingCard";
import "./Pricing.css";

interface Plan {
  id: string;
  name: string;
  badge?: string;
  monthlyPrice: number;
  yearlyPrice: number;
  features: string[];
  featured?: boolean;
}

const plans: Plan[] = [
  {
    id: "basic",
    name: "Basic",
    monthlyPrice: 999,
    yearlyPrice: 9999,
    features: [
      "Live classes",
      "Basic projects",
      "Course completion certificate",
      "Email support",
    ],
  },
  {
    id: "pro",
    name: "Pro",
    badge: "Most Popular",
    monthlyPrice: 1999,
    yearlyPrice: 19999,
    features: [
      "Live classes",
      "Real-world projects",
      "Professional certificate",
      "Placement support",
      "Priority email support",
      "1-on-1 mentoring",
    ],
    featured: true,
  },
  {
    id: "premium",
    name: "Premium",
    badge: "Best Value",
    monthlyPrice: 2999,
    yearlyPrice: 29999,
    features: [
      "Live classes",
      "Advanced real projects",
      "Professional certificate",
      "Job guarantee",
      "24/7 priority support",
      "Unlimited 1-on-1 mentoring",
    ],
  },
];

const comparisonFeatures = [
  { name: "Live Classes", basic: true, pro: true, premium: true },
  { name: "Recording Access", basic: false, pro: true, premium: true },
  { name: "Projects", basic: "Basic", pro: "Real-world", premium: "Advanced" },
  {
    name: "Certificate",
    basic: "Basic",
    pro: "Professional",
    premium: "Professional",
  },
  { name: "Mentoring", basic: false, pro: "Limited", premium: "Unlimited" },
  {
    name: "Job Support",
    basic: false,
    pro: "Placement Support",
    premium: "Job Guarantee",
  },
  {
    name: "Support",
    basic: "Email",
    pro: "Priority Email",
    premium: "24/7 Priority",
  },
  { name: "Community Access", basic: true, pro: true, premium: true },
];

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const tableRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("scroll-animate");
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll(".scroll-card, .scroll-table");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section className="pricing-section" ref={sectionRef}>
      <div className="pricing-container">
        <h2 className="pricing-title">Simple, Transparent Pricing</h2>
        <p className="pricing-subtitle">
          Choose the perfect plan for your learning journey
        </p>

        <div className="toggle-wrapper">
          <span className={`toggle-label ${!isYearly ? "active" : ""}`}>
            Monthly
          </span>
          <div
            className={`toggle-switch ${isYearly ? "yearly" : "monthly"}`}
            onClick={() => setIsYearly(!isYearly)}
            role="switch"
            aria-checked={isYearly}
            aria-label="Toggle between monthly and yearly billing"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                setIsYearly(!isYearly);
              }
            }}
          >
            <div className="toggle-slider"></div>
          </div>
          <span className={`toggle-label ${isYearly ? "active" : ""}`}>
            Yearly
          </span>
        </div>

        <div className="pricing-cards-grid" ref={cardsRef}>
          {plans.map((plan) => (
            <div key={plan.id} className="scroll-card">
              <PricingCard
                name={plan.name}
                badge={plan.badge}
                price={isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                period={isYearly ? "year" : "mo"}
                features={plan.features}
                featured={plan.featured}
                isYearly={isYearly}
              />
            </div>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="comparison-section scroll-table" ref={tableRef}>
          <h3 className="comparison-title">Detailed Comparison</h3>
          <div className="table-wrapper">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th className="feature-name-header">Features</th>
                  <th className="plan-header">Basic</th>
                  <th className="plan-header pro">Pro</th>
                  <th className="plan-header">Premium</th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((feature, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? "even-row" : "odd-row"}
                  >
                    <td className="feature-name">{feature.name}</td>
                    <td className="feature-cell">
                      {typeof feature.basic === "boolean" ? (
                        feature.basic ? (
                          <span className="check-mark">✓</span>
                        ) : (
                          <span className="cross-mark">✗</span>
                        )
                      ) : (
                        <span className="feature-value">{feature.basic}</span>
                      )}
                    </td>
                    <td className="feature-cell">
                      {typeof feature.pro === "boolean" ? (
                        feature.pro ? (
                          <span className="check-mark">✓</span>
                        ) : (
                          <span className="cross-mark">✗</span>
                        )
                      ) : (
                        <span className="feature-value">{feature.pro}</span>
                      )}
                    </td>
                    <td className="feature-cell">
                      {typeof feature.premium === "boolean" ? (
                        feature.premium ? (
                          <span className="check-mark">✓</span>
                        ) : (
                          <span className="cross-mark">✗</span>
                        )
                      ) : (
                        <span className="feature-value">{feature.premium}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
