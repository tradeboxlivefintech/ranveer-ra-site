"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { userData } from "@/data/userData";

const ServicesPreview = () => {
  const featuredServices = userData.services.slice(0, 3);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-blue-600">Research Services</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Comprehensive research solutions designed to help you make informed
            investment decisions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-gradient-to-b from-white to-gray-50 rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl">
                  {index === 0 && "📊"}
                  {index === 1 && "💼"}
                  {index === 2 && "🏢"}
                </span>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>

              <p className="text-gray-600 mb-6">{service.description}</p>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-900 mb-3">
                  Key Features:
                </h4>
                <ul className="space-y-2">
                  {service.features.slice(0, 4).map((feature, i) => (
                    <li key={i} className="flex items-center space-x-2">
                      <span className="w-4 h-4 bg-green-100 rounded-full flex items-center justify-center">
                        <span className="text-green-600 text-xs">✓</span>
                      </span>
                      <span className="text-sm text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-gray-200">
                <span className="text-sm text-gray-500">
                  Delivery: {service.delivery}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="/services"
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
          >
            View All Services
            <span className="ml-2">→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesPreview;