"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { userData } from "@/data/userData";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Disclaimer from "@/app/disclaimer/page";
import DisclaimerModal from "./DisclaimerModal";

const Hero = () => {
  const [randomValues, setRandomValues] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  
  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log("Form submitted:", data);
      setSubmitSuccess(true);
      reset();
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    } catch (error) {
      console.error("Submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
<DisclaimerModal/>
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50" />
      
      <div className="absolute inset-0 overflow-hidden">
        {randomValues.map((item, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-200 rounded-full"
            initial={{ y: item.y, x: `${item.x}%` }}
            animate={{
              y: "100vh",
              x: `calc(${item.x}% - 50px)`,
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
          {/* Left Side - Original Content */}
          <div className="mb-16">
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
      className="flex flex-col sm:flex-row gap-8 mb-12"
    >
      <Link
        href="/research"
        className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 text-center"
      >
        Explore Research Reports
      </Link>
      <a
        href="#contact-form"
        className="px-8 py-4 bg-white text-gray-900 border-2 border-gray-200 rounded-xl font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-300 text-center"
      >
        Book Free Consultation
      </a>
    </motion.div>
  </motion.div>
  
  {/* Get Started Today Section */}
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.8 }}
    className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 shadow-lg border border-gray-100"
  >
    <div className="max-w-2xl mx-auto text-center">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6"
      >
        <span className="text-2xl text-white">🚀</span>
      </motion.div>
      
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.1 }}
        className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
      >
        Get Started Today
      </motion.h2>
      
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="text-lg text-gray-600 mb-6"
      >
        Fill out the form to begin your investment journey
      </motion.p>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.3 }}
        className="flex flex-col sm:flex-row justify-center gap-4"
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center justify-center gap-2 text-blue-600 font-semibold"
        >
          <span className="text-xl">👇</span>
          <span className="text-lg">Scroll down to get started</span>
          <span className="text-xl">👇</span>
        </motion.div>
      </motion.div>
    </div>
  </motion.div>
</div>
          {/* Right Side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            id="contact-form"
          >
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
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Get Your Free Consultation
              </h3>
              <p className="text-gray-600 mb-6">
                Fill in your details and our analyst will contact you within 24 hours.
              </p>

              {submitSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg"
                >
                  <div className="flex items-center">
                    <span className="text-green-600 mr-2">✓</span>
                    <p className="text-green-700 font-medium">
                      Thank you! We&apos;ve received your message. Our analyst will contact you soon.
                    </p>
                  </div>
                </motion.div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Full Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    {...register("fullName", { required: "Full name is required" })}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                      errors.fullName ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="Enter your full name"
                  />
                  {errors.fullName && (
                    <p className="mt-1 text-sm text-red-600">{errors.fullName.message}</p>
                  )}
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    {...register("phone", {
                      required: "Phone number is required",
                      pattern: {
                        value: /^[0-9]{10}$/,
                        message: "Please enter a valid 10-digit phone number",
                      },
                    })}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                      errors.phone ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="Enter your 10-digit phone number"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Please enter a valid email address",
                      },
                    })}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                      errors.email ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="Enter your email address"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    {...register("message", { required: "Message is required" })}
                    rows="4"
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                      errors.message ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="Tell us about your investment goals or specific questions..."
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                  )}
                </div>

                {/* I'm not a robot checkbox */}
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      type="checkbox"
                      {...register("notRobot", { required: "Please verify you're not a robot" })}
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label className="font-medium text-gray-700">
                      I&apos;m not a robot
                    </label>
                    {errors.notRobot && (
                      <p className="mt-1 text-sm text-red-600">{errors.notRobot.message}</p>
                    )}
                  </div>
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-4 px-6 rounded-xl font-semibold text-white transition-all duration-300 ${
                    isSubmitting
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-lg hover:shadow-blue-500/25"
                  }`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </span>
                  ) : (
                    "Submit & Get Free Consultation"
                  )}
                </motion.button>

                {/* Privacy Note */}
                <p className="text-xs text-gray-500 text-center">
                  By submitting this form, you agree to our terms and privacy policy. 
                  We respect your privacy and never share your information with third parties.
                </p>
              </form>

              {/* Analyst Info at Bottom */}
              <div className="mt-8 pt-6 border-t">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-xl">📊</span>
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

            {/* Quick Links */}
            
          </motion.div>
        </div>
      </div>
    </section>
</>
  );
};

export default Hero;