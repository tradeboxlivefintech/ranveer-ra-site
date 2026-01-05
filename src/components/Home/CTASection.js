"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { userData } from "@/data/userData";

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-50 to-purple-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Ready to Make <span className="text-blue-600">Informed</span>{" "}
            Investment Decisions?
          </h2>
          
          <p className="text-gray-600 max-w-2xl mx-auto mb-8 text-lg">
            Partner with a SEBI Registered Research Analyst for professional,
            compliant, and research-backed investment guidance.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/contact"
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-xl transition-all duration-300"
            >
              Schedule a Free Consultation
            </Link>
            <Link
              href="/compliance"
              className="px-8 py-4 bg-white text-gray-900 border-2 border-gray-200 rounded-xl font-semibold hover:border-blue-600 hover:text-blue-600 transition-all"
            >
              View Compliance Details
            </Link>
          </div>

          <div className="inline-flex items-center space-x-6 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-green-600">✓</span>
              </div>
              <span>SEBI Registered</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600">✓</span>
              </div>
              <span>No Conflict of Interest</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                <span className="text-purple-600">✓</span>
              </div>
              <span>Transparent Disclosures</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;