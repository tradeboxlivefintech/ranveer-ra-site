"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const ResearchHighlights = () => {
  const researchAreas = [
    {
      title: "Fundamental Analysis",
      description: "Deep dive into company financials, management quality, and industry positioning",
      metrics: ["DCF Valuation", "Ratio Analysis", "Peer Comparison", "Growth Projections"],
      color: "from-blue-500 to-blue-600",
    },
    {
      title: "Technical Analysis",
      description: "Price action study, trend analysis, and timing recommendations",
      metrics: ["Trend Lines", "Support/Resistance", "Volume Analysis", "Indicators"],
      color: "from-purple-500 to-purple-600",
    },
    {
      title: "Risk Assessment",
      description: "Comprehensive risk evaluation and mitigation strategies",
      metrics: ["Market Risk", "Sector Risk", "Company Risk", "Portfolio Risk"],
      color: "from-green-500 to-green-600",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Research <span className="text-blue-600">Methodology</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Our comprehensive research approach combines quantitative analysis with qualitative insights
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {researchAreas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 h-full">
                <div
                  className={`w-12 h-12 bg-gradient-to-br ${area.color} rounded-xl flex items-center justify-center mb-6`}
                >
                  <span className="text-white text-xl">
                    {index === 0 && "📊"}
                    {index === 1 && "📈"}
                    {index === 2 && "🛡️"}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {area.title}
                </h3>

                <p className="text-gray-600 mb-6">{area.description}</p>

                <div className="space-y-2">
                  {area.metrics.map((metric, i) => (
                    <div key={i} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full" />
                      <span className="text-sm text-gray-700">{metric}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 lg:p-12 text-white"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="mb-6 lg:mb-0 lg:mr-8">
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                Access Premium Research Reports
              </h3>
              <p className="text-blue-100">
                Get detailed equity research with buy/sell recommendations based on comprehensive analysis
              </p>
            </div>
            <Link
              href="/research"
              className="px-8 py-3 bg-white text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-colors whitespace-nowrap"
            >
              View Sample Reports
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResearchHighlights;