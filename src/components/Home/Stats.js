"use client";

import { motion } from "framer-motion";
import AnimatedCounter from "@/components/Shared/AnimatedCounter";

const Stats = () => {
  const stats = [
    { label: "Years of Experience", value: 8, suffix: "+" },
    { label: "Research Reports", value: 500, suffix: "+" },
    { label: "Clients Served", value: 250, suffix: "+" },
    { label: "Companies Covered", value: 100, suffix: "+" },
    { label: "Accuracy Rate", value: 85, suffix: "%" },
    { label: "Regulatory Compliance", value: 100, suffix: "%" },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-blue-600">Track Record</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Consistent performance and commitment to excellence in equity research
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center bg-white p-6 rounded-2xl shadow-lg border border-gray-100"
            >
              <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-2">
                <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-gray-600 text-sm font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;