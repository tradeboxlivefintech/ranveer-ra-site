"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { userData } from "@/data/userData";
import { Target, Brain, Shield, TrendingUp, ArrowRight } from "lucide-react";

const AboutPreview = () => {
  return (
    <section className="relative py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-green-500/5 to-emerald-500/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Target className="w-4 h-4" />
            SEBI Registered Research Analyst
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Research Built for{" "}
            <span className="relative">
              <span className="text-green-600">Clarity</span>
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-green-500/40 to-emerald-500/40 rounded-full"></span>
            </span>
            , Not Hype
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            As a SEBI recognized research entity, Redwood Financial combines data analysis, 
            market study, and economic reasoning to produce structured, responsible insights.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="h-full"
          >
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 h-full hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Our Regulatory Foundation
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">
                    SEBI Registration No: {userData.regNumber}
                  </p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Brain className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Disciplined Thinking
                    </h4>
                    <p className="text-gray-600">
                      We counter emotional narratives with structured analysis. 
                      Our research is fact-based, not influenced by market noise or speculation.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <TrendingUp className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Focus on Understanding
                    </h4>
                    <p className="text-gray-600">
                      We believe understanding markets matters more than predicting them. 
                      Our work helps develop independent thinking and better risk awareness.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Target className="w-5 h-5 text-teal-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Compliance-First Approach
                    </h4>
                    <p className="text-gray-600">
                      Every insight we share is backed by transparent methodology, 
                      ethical communication, and strict regulatory compliance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border-2 border-green-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                What Makes Us Different
              </h3>
              <ul className="space-y-4">
                {[
                  {
                    text: "We focus on research, not portfolio management",
                    subtext: "Helping you make informed decisions"
                  },
                  {
                    text: "Independent analysis without brokerage ties",
                    subtext: "No conflict of interest in our recommendations"
                  },
                  {
                    text: "Transparent conflict of interest disclosures",
                    subtext: "Complete regulatory compliance"
                  },
                  {
                    text: "Focus on long-term thinking, not short-term trends",
                    subtext: "Clarity over noise"
                  },
                  {
                    text: "Educational content for market understanding",
                    subtext: "Building independent thinking"
                  },
                ].map((item, i) => (
                  <motion.li 
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + (i * 0.1) }}
                    className="flex items-start gap-3 group"
                  >
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1 group-hover:bg-green-200 transition-colors">
                      <span className="text-green-600 text-sm font-bold">✓</span>
                    </div>
                    <div>
                      <span className="font-medium text-gray-900">{item.text}</span>
                      <p className="text-gray-600 text-sm mt-1">{item.subtext}</p>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
            >
              <Link
                href="/about"
                className="group inline-flex items-center justify-between w-full p-6 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-2xl font-semibold hover:shadow-2xl hover:shadow-green-500/25 transition-all duration-300"
              >
                <div className="text-left">
                  <div className="text-sm opacity-90">Discover Our Philosophy</div>
                  <div className="text-xl">Understanding Markets, Responsibly</div>
                </div>
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center group-hover:bg-white/30 transition-all">
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
              
              <div className="mt-4 text-center">
                <p className="text-gray-500 text-sm">
                  <span className="font-semibold text-gray-700">Our Promise:</span> No false promises, no guaranteed outcomes — just transparent, responsible research.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
          className="mt-16 text-center"
        >
          <div className="inline-block max-w-2xl">
            <div className="text-3xl text-gray-300 mb-2">&apos;</div>
            <p className="text-xl text-gray-700 italic">
              Markets reward patience, logic, and preparation — not shortcuts. 
              Redwood Financial exists to reinforce that mindset.
            </p>
            <div className="h-1 w-24 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full mx-auto mt-6"></div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .bg-grid-pattern {
          background-image: 
            linear-gradient(to right, #05966915 1px, transparent 1px),
            linear-gradient(to bottom, #05966915 1px, transparent 1px);
          background-size: 50px 50px;
        }
      `}</style>
    </section>
  );
};

export default AboutPreview;