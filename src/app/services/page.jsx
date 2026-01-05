import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import { userData } from "@/data/userData";

export default function Services() {
  return (
    <>
      <Header userData={userData} />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-b from-blue-50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Our <span className="text-blue-600">Services</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive research and advisory solutions for informed investment decisions
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Research & Advisory Services
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                As a SEBI Registered Research Analyst, we provide the following services
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {userData.services.map((service, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center text-2xl mb-6">
                    {index === 0 ? "📊" : index === 1 ? "💼" : "🏢"}
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Includes:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
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
                    <p className="text-sm text-gray-500">
                      <strong>Delivery:</strong> {service.delivery}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Process */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Our <span className="text-blue-600">Process</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Requirement Analysis",
                  description: "Understand client objectives and risk profile"
                },
                {
                  step: "02",
                  title: "Research & Analysis",
                  description: "Comprehensive fundamental and technical analysis"
                },
                {
                  step: "03",
                  title: "Recommendations",
                  description: "Buy/Sell/Hold recommendations with rationale"
                },
                {
                  step: "04",
                  title: "Regular Updates",
                  description: "Ongoing monitoring and portfolio reviews"
                }
              ].map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-2xl font-bold">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What We DON'T Do (Important for RA) */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center text-2xl mr-4">
                  ⚠️
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Important: What We DON &lapos;T Do
                </h2>
              </div>
              
              <div className="space-y-4">
                <p className="text-gray-700">
                  As a SEBI Registered Research Analyst, it&apos;s important to understand our limitations:
                </p>
                
                <ul className="space-y-3">
                  {[
                    "❌ We DO NOT manage client funds or portfolios",
                    "❌ We DO NOT execute trades on behalf of clients",
                    "❌ We DO NOT provide portfolio management services",
                    "❌ We DO NOT guarantee returns or assure profits",
                    "✅ We ONLY provide research reports and investment advice"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <span className="text-lg">{item.startsWith("❌") ? "❌" : "✅"}</span>
                      <span className={item.startsWith("❌") ? "text-gray-700" : "text-green-700"}>
                        {item.substring(2)}
                      </span>
                    </li>
                  ))}
                </ul>
                
                <p className="text-gray-700 mt-6">
                  This distinction is important as per SEBI regulations. Research Analysts provide advice while Investment Advisors may manage funds (with separate registration).
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="container mx-auto px-4 text-center text-white">
            <h2 className="text-3xl font-bold mb-6">
              Need Professional Research Services?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-100">
              Get in touch for a detailed consultation about our research services
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-block px-8 py-3 bg-white text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-colors"
              >
                Schedule Consultation
              </a>
              <a
                href="/research"
                className="inline-block px-8 py-3 bg-transparent text-white border-2 border-white rounded-xl font-semibold hover:bg-white/10 transition-colors"
              >
                View Research Samples
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer userData={userData} />
    </>
  );
}