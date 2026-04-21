import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo & Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600" />
              <span className="font-bold">EduLearn</span>
            </div>
            <p className="text-gray-400 text-sm">
              Transforming education through quality online learning.
            </p>
          </motion.div>

          {/* Product Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <motion.a
                  href="#"
                  whileHover={{ x: 4, color: "#ffffff" }}
                  className="hover:text-white transition-colors inline-block"
                >
                  Courses
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="#"
                  whileHover={{ x: 4, color: "#ffffff" }}
                  className="hover:text-white transition-colors inline-block"
                >
                  Pricing
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="#"
                  whileHover={{ x: 4, color: "#ffffff" }}
                  className="hover:text-white transition-colors inline-block"
                >
                  Features
                </motion.a>
              </li>
            </ul>
          </motion.div>

          {/* Company Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <motion.a
                  href="#"
                  whileHover={{ x: 4, color: "#ffffff" }}
                  className="hover:text-white transition-colors inline-block"
                >
                  About
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="#"
                  whileHover={{ x: 4, color: "#ffffff" }}
                  className="hover:text-white transition-colors inline-block"
                >
                  Blog
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="#"
                  whileHover={{ x: 4, color: "#ffffff" }}
                  className="hover:text-white transition-colors inline-block"
                >
                  Contact
                </motion.a>
              </li>
            </ul>
          </motion.div>

          {/* Legal Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <motion.a
                  href="#"
                  whileHover={{ x: 4, color: "#ffffff" }}
                  className="hover:text-white transition-colors inline-block"
                >
                  Privacy
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="#"
                  whileHover={{ x: 4, color: "#ffffff" }}
                  className="hover:text-white transition-colors inline-block"
                >
                  Terms
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="#"
                  whileHover={{ x: 4, color: "#ffffff" }}
                  className="hover:text-white transition-colors inline-block"
                >
                  Cookies
                </motion.a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Footer Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row items-center justify-between"
        >
          <p className="text-gray-400 text-sm">
            © 2026 EduLearn. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 sm:mt-0">
            <motion.a
              href="#"
              whileHover={{ scale: 1.2, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
              className="text-gray-400 hover:text-white transition-colors"
            >
              Twitter
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.2, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
              className="text-gray-400 hover:text-white transition-colors"
            >
              LinkedIn
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.2, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
              className="text-gray-400 hover:text-white transition-colors"
            >
              GitHub
            </motion.a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
