import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import { userData } from "@/data/userData";

export default function Contact() {
  return (
    <>
      <Header userData={userData} />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-b from-blue-50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Contact <span className="text-blue-600">Us</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Get in touch for professional research and advisory services
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info & Form */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  Get In Touch
                </h2>

                <div className="space-y-8">
                  {/* Address */}
                  <div className="flex items-start space-x-4 p-6 bg-blue-50 rounded-2xl">
                    <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                      📍
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Registered Office</h3>
                      <p className="text-gray-600">
                        {userData.contact.address.line1}<br />
                        {userData.contact.address.line2}<br />
                        {userData.contact.address.city}, {userData.contact.address.state} - {userData.contact.address.pincode}<br />
                        {userData.contact.address.country}
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start space-x-4 p-6 bg-blue-50 rounded-2xl">
                    <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                      📞
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone & WhatsApp</h3>
                      <p className="text-gray-600 mb-1">{userData.contact.phone}</p>
                      <p className="text-sm text-gray-500">Available: Mon-Fri, 10 AM - 6 PM</p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start space-x-4 p-6 bg-blue-50 rounded-2xl">
                    <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                      ✉️
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
                      <p className="text-gray-600">{userData.contact.email}</p>
                      <p className="text-sm text-gray-500 mt-1">
                        For research inquiries and consultations
                      </p>
                    </div>
                  </div>

                  {/* Compliance Contact */}
                  <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-2xl">
                    <div className="w-12 h-12 bg-gray-700 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                      ⚖️
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Compliance & Grievance</h3>
                      <p className="text-gray-600 mb-1">
                        Email: {userData.compliance.officer.email}
                      </p>
                      <p className="text-sm text-gray-500">
                        For regulatory compliance and grievance-related matters
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Send Us a Message
                </h2>

                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
                      placeholder="+91 98765 43210"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Service Interest
                    </label>
                    <select className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors">
                      <option value="">Select a service</option>
                      <option value="equity-research">Equity Research Reports</option>
                      <option value="portfolio-advisory">Portfolio Advisory</option>
                      <option value="sector-research">Sector Research</option>
                      <option value="consultation">Initial Consultation</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors resize-none"
                      placeholder="Tell us about your requirements..."
                    />
                  </div>

                  <div className="bg-blue-50 p-4 rounded-xl">
                    <div className="flex items-start space-x-3">
                      <input type="checkbox" id="disclaimer" required className="mt-1" />
                      <label htmlFor="disclaimer" className="text-sm text-gray-600">
                        I understand that investment in securities market are subject to market risks. 
                        I have read and understood the disclaimer on the website.
                      </label>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Map & Business Hours */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Map Placeholder */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Location</h3>
                <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl h-64 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
                      📍
                    </div>
                    <p className="text-gray-700 font-medium">{userData.contact.address.city}</p>
                    <p className="text-gray-600 text-sm">Mumbai, Maharashtra</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mt-4">
                  {userData.contact.address.line1}, {userData.contact.address.line2}, {userData.contact.address.city}
                </p>
              </div>

              {/* Business Hours */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Business Hours</h3>
                <div className="space-y-4">
                  {[
                    { day: "Monday - Friday", hours: "10:00 AM - 6:00 PM" },
                    { day: "Saturday", hours: "10:00 AM - 2:00 PM" },
                    { day: "Sunday", hours: "Closed" },
                  ].map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center py-3 border-b border-gray-100">
                      <span className="font-medium text-gray-900">{schedule.day}</span>
                      <span className="text-gray-600">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 p-4 bg-blue-50 rounded-xl">
                  <h4 className="font-semibold text-gray-900 mb-2">Response Time</h4>
                  <p className="text-gray-600 text-sm">
                    We strive to respond to all inquiries within 24 hours on business days.
                    For urgent matters, please call us directly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="container mx-auto px-4 text-center text-white">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Start Your Investment Journey?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-100">
              Book a free initial consultation with our SEBI Registered Research Analyst
            </p>
            <a
              href="#"
              className="inline-block px-8 py-3 bg-white text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-colors"
            >
              Book Free Consultation
            </a>
          </div>
        </section>
      </main>
      <Footer userData={userData} />
    </>
  );
}