"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Rajesh Mehta",
      role: "Portfolio Manager",
      company: "ABC Investments",
      content: "The research quality is exceptional. Their fundamental analysis helped us identify multi-bagger opportunities early.",
      rating: 5,
    },
    {
      name: "Priya Sharma",
      role: "Individual Investor",
      company: "",
      content: "As a retail investor, their research gives me confidence in my investment decisions. The risk assessment is particularly helpful.",
      rating: 5,
    },
    {
      name: "Amit Patel",
      role: "Wealth Advisor",
      company: "XYZ Financial Services",
      content: "Professional and timely research. Their sector analysis has been instrumental in our investment strategy.",
      rating: 5,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

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
            Client <span className="text-blue-600">Testimonials</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            What our clients say about our research and advisory services
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
            >
              {/* Stars */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>

              <p className="text-gray-700 italic mb-6 leading-relaxed">
                {testimonial.content}
              </p>

              <div className="border-t pt-6">
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">
                    {testimonial.role}
                    {testimonial.company && `, ${testimonial.company}`}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;