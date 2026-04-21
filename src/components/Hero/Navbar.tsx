import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600" />
          <span className="font-bold text-xl text-gray-800">EduLearn</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-gray-700">
          <a
            href="#courses"
            className="text-sm hover:text-blue-500 transition-colors"
          >
            Courses
          </a>
          <a
            href="#how-it-works"
            className="text-sm hover:text-blue-500 transition-colors"
          >
            How It Works
          </a>
          <a
            href="#testimonials"
            className="text-sm hover:text-blue-500 transition-colors"
          >
            Testimonials
          </a>
          <a
            href="#faq"
            className="text-sm hover:text-blue-500 transition-colors"
          >
            FAQ
          </a>

          {/* React Route */}
          <Link
            to="/pricing"
            className="text-sm hover:text-blue-500 transition-colors"
          >
            Pricing
          </Link>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          <button className="hidden md:block bg-blue-500 text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-blue-600 transition">
            Sign In
          </button>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition"
          >
            <svg
              className="w-6 h-6 text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-t border-gray-200 bg-white"
          >
            <div className="flex flex-col gap-2 px-4 py-4 text-gray-700">
              <a
                href="#courses"
                onClick={() => setIsOpen(false)}
                className="py-2 hover:text-blue-500"
              >
                Courses
              </a>
              <a
                href="#how-it-works"
                onClick={() => setIsOpen(false)}
                className="py-2 hover:text-blue-500"
              >
                How It Works
              </a>
              <a
                href="#testimonials"
                onClick={() => setIsOpen(false)}
                className="py-2 hover:text-blue-500"
              >
                Testimonials
              </a>
              <a
                href="#faq"
                onClick={() => setIsOpen(false)}
                className="py-2 hover:text-blue-500"
              >
                FAQ
              </a>

              <Link
                to="/pricing"
                onClick={() => setIsOpen(false)}
                className="py-2 hover:text-blue-500"
              >
                Pricing
              </Link>

              <button className="w-full mt-2 bg-blue-500 text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-blue-600 transition">
                Sign In
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
