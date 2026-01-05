"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { userData } from "@/data/userData";
import { useEffect, useState } from "react";

const Hero = () => {
  // Remove the TypeScript type annotation - just use useState([])
  const [randomValues, setRandomValues] = useState([]);

  useEffect(() => {
    // Create random values inside useEffect (client-side only)
    const createRandomValues = (count) => {
      return Array.from({ length: count }, () => ({
        y: -100,
        x: Math.random() * 100,
        duration: Math.random() * 10 + 10,
        delay: Math.random() * 5,
      }));
    };

    //setRandomValues(createRandomValues(20));
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {randomValues.map((item, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-200 rounded-full"
            initial={{ y: item.y, x: item.x }}
            animate={{
              y: "100vh",
              x: `calc(${item.x}px - 50px)`,
            }}
            transition={{
              duration: item.duration,
              repeat: Infinity,
              delay: item.delay,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6"
            >
              <span className="w-2 h-2 bg-blue-600 rounded-full mr-2" />
              SEBI Registered Research Analyst
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6"
            >
              Professional{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Equity Research
              </span>{" "}
              & Investment Advisory
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg lg:text-xl text-gray-600 mb-8 leading-relaxed"
            >
              Redwood Financial is a SEBI-recognized research and insights firm focused on delivering clear, data-driven market intelligence to individuals who value informed decision-making.

            </motion.p>

            {/* Key Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="grid grid-cols-2 gap-4 mb-8"
            >
              {[
                "Fundamental Analysis",
                "Technical Analysis",
                "Risk Management",
                "Portfolio Advisory",
              ].map((feature, i) => (
                <div key={i} className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 text-sm">✓</span>
                  </div>
                  <span className="text-gray-700 font-medium">{feature}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/research"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 text-center"
              >
                Explore Research Reports
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 bg-white text-gray-900 border-2 border-gray-200 rounded-xl font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-300 text-center"
              >
                Book Free Consultation
              </Link>
            </motion.div>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative">
              {/* Main Card */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="bg-white rounded-2xl p-8 shadow-2xl border border-gray-100"
              >
                {/* Chart */}
                <div className="mb-8">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold text-gray-900">
                      Market Performance
                    </h3>
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                      +24.5% YTD
                    </span>
                  </div>
                  <div className="h-48 bg-gradient-to-b from-blue-50 to-white rounded-lg p-4">
                    {/* Simple Chart Illustration */}
                    <div className="relative h-full">
                      <div className="absolute inset-0 flex items-end">
                        {[30, 60, 45, 80, 65, 90, 75].map((height, i) => (
                          <div
                            key={i}
                            className="flex-1 mx-1 bg-gradient-to-t from-blue-500 to-blue-300 rounded-t-lg"
                            style={{ height: `${height}%` }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Analyst Card */}
                <div className="border-t pt-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center">
                      <span className="text-2xl">📊</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">
                        {userData.analyst.name}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {userData.analyst.designation}
                      </p>
                      <p className="text-xs text-gray-500">
                        SEBI Reg: {userData.regNumber}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="absolute -top-4 -right-4 bg-white p-4 rounded-xl shadow-lg border"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">500+</div>
                  <div className="text-sm text-gray-600">Research Reports</div>
                </div>
              </motion.div>

              <motion.div
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="absolute -bottom-4 -left-4 bg-white p-4 rounded-xl shadow-lg border"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">250+</div>
                  <div className="text-sm text-gray-600">Clients Served</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;