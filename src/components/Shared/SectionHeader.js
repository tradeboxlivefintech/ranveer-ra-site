"use client";

import { motion } from "framer-motion";

const SectionHeader = ({ title, subtitle, highlight }) => {
  const words = title.split(" ");
  const lastWord = words.pop();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center mb-12"
    >
      <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
        {words.join(" ")}{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
          {highlight || lastWord}
        </span>
      </h2>
      {subtitle && (
        <p className="text-gray-600 max-w-3xl mx-auto text-lg">{subtitle}</p>
      )}
    </motion.div>
  );
};

export default SectionHeader;