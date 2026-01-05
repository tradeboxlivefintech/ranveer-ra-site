import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import { userData } from "@/data/userData";

export default function Research() {
  return (
    <>
      <Header userData={userData} />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-b from-blue-50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Research <span className="text-blue-600">Methodology</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Professional equity research backed by comprehensive analysis and SEBI compliance
              </p>
            </div>
          </div>
        </section>

        {/* Research Methodology */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Our Research Approach
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {[
                {
                  title: "Fundamental Analysis",
                  color: "from-blue-500 to-blue-600",
                  items: [
                    "Financial Statement Analysis",
                    "Ratio Analysis (Profitability, Liquidity)",
                    "DCF Valuation Models",
                    "Peer Comparison",
                    "Management Quality Assessment"
                  ]
                },
                {
                  title: "Technical Analysis",
                  color: "from-purple-500 to-purple-600",
                  items: [
                    "Trend Analysis",
                    "Support & Resistance Levels",
                    "Moving Averages",
                    "Volume Analysis",
                    "Momentum Indicators"
                  ]
                },
                {
                  title: "Qualitative Analysis",
                  color: "from-green-500 to-green-600",
                  items: [
                    "Industry Analysis",
                    "Competitive Positioning",
                    "Regulatory Environment",
                    "ESG Factors",
                    "Management Evaluation"
                  ]
                }
              ].map((method, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                  <div className={`w-16 h-16 bg-gradient-to-br ${method.color} rounded-xl flex items-center justify-center text-white text-2xl mb-6`}>
                    {index === 0 ? "📊" : index === 1 ? "📈" : "🔍"}
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-6">{method.title}</h3>
                  
                  <ul className="space-y-3">
                    {method.items.map((item, i) => (
                      <li key={i} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2" />
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sample Reports */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Sample <span className="text-blue-600">Research Reports</span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Examples of our comprehensive research analysis and reporting style
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Technology Sector Analysis",
                  sector: "Information Technology",
                  recommendation: "BUY",
                  date: "Jan 2024",
                  features: ["DCF Valuation", "Peer Comparison", "Growth Analysis"]
                },
                {
                  title: "Banking Sector Review",
                  sector: "Banking & Financial Services",
                  recommendation: "HOLD",
                  date: "Dec 2023",
                  features: ["NPA Analysis", "Margin Trends", "Regulatory Impact"]
                },
                {
                  title: "Pharma Sector Outlook",
                  sector: "Pharmaceuticals",
                  recommendation: "ACCUMULATE",
                  date: "Nov 2023",
                  features: ["Pipeline Analysis", "Export Trends", "Regulatory Updates"]
                }
              ].map((report, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">{report.title}</h3>
                      <p className="text-sm text-gray-500">{report.sector}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      report.recommendation === "BUY" 
                        ? "bg-green-100 text-green-800"
                        : report.recommendation === "HOLD"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-blue-100 text-blue-800"
                    }`}>
                      {report.recommendation}
                    </span>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Analysis Includes:</h4>
                    <div className="flex flex-wrap gap-2">
                      {report.features.map((feature, i) => (
                        <span key={i} className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-200">
                    <div className="flex justify-between items-center text-sm text-gray-500">
                      <span>Published: {report.date}</span>
                      <button className="text-blue-600 hover:text-blue-700 font-medium">
                        View Sample →
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mandatory Disclosures */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Mandatory <span className="text-blue-600">Disclosures</span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                As per SEBI Research Analyst Regulations, 2014
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="space-y-6">
                {[
                  {
                    title: "Conflict of Interest",
                    description: "We maintain independence in our research. Any potential conflicts are disclosed in research reports.",
                    icon: "⚖️"
                  },
                  {
                    title: "Investment Holdings",
                    description: "Any positions held by the analyst or related parties in recommended securities are disclosed.",
                    icon: "📊"
                  },
                  {
                    title: "Research Independence",
                    description: "Our research is independent and not influenced by any external parties or brokerages.",
                    icon: "🛡️"
                  },
                  {
                    title: "Compensation",
                    description: "We receive compensation only from clients for research services, not from companies being researched.",
                    icon: "💰"
                  }
                ].map((disclosure, index) => (
                  <div key={index} className="flex items-start space-x-4 p-6 bg-white rounded-xl border border-gray-200">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-2xl flex-shrink-0">
                      {disclosure.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {disclosure.title}
                      </h3>
                      <p className="text-gray-600">{disclosure.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="container mx-auto px-4 text-center text-white">
            <h2 className="text-3xl font-bold mb-6">
              Access Professional Research Reports
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-100">
              Get detailed equity research with comprehensive analysis and investment recommendations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-block px-8 py-3 bg-white text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-colors"
              >
                Subscribe to Research
              </a>
              <a
                href="/compliance"
                className="inline-block px-8 py-3 bg-transparent text-white border-2 border-white rounded-xl font-semibold hover:bg-white/10 transition-colors"
              >
                View Full Disclosures
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer userData={userData} />
    </>
  );
}