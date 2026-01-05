'use client';
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import { userData } from "@/data/userData";
import { Target, Eye, Shield, Brain, BarChart3, TrendingUp } from "lucide-react";

export default function About() {
  return (
    <>
      <Header userData={userData} />
      <main className="overflow-hidden">
        {/* Hero Section */}
        
        {/* Founding Story */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  About <span className="text-green-600">Redwood Financial</span>
                </h2>
                <div className="h-1 w-20 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto rounded-full"></div>
              </div>

              <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
                <p className="text-xl leading-relaxed">
                  Redwood Financial was founded with a simple but powerful objective:
                  to bring clarity back into market understanding.
                </p>

                <p>
                  Over time, financial information has become louder but not smarter. Social media narratives, 
                  unchecked opinions, and unrealistic promises have replaced structured thinking and disciplined 
                  analysis. Redwood Financial was created as a counterbalance to this trend.
                </p>

                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 my-8 border-l-4 border-green-500">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Approach</h3>
                  <p className="text-gray-700">
                    We operate as a research-driven organization, combining data analysis, market study, 
                    and economic reasoning to produce insights that are:
                  </p>
                  <div className="grid md:grid-cols-3 gap-4 mt-6">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                        <Brain className="w-4 h-4 text-green-600" />
                      </div>
                      <span className="font-medium text-gray-900">Fact-based, not emotional</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                        <BarChart3 className="w-4 h-4 text-green-600" />
                      </div>
                      <span className="font-medium text-gray-900">Structured, not confusing</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                        <Shield className="w-4 h-4 text-green-600" />
                      </div>
                      <span className="font-medium text-gray-900">Responsible, not speculative</span>
                    </div>
                  </div>
                </div>

                <p>
                  As a SEBI-recognized research entity, Redwood Financial follows a compliance-first approach, 
                  ensuring that all research and communication remains transparent, ethical, and aligned with 
                  regulatory standards.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What We Do */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                What We <span className="text-green-600">Focus On</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Our work is intended to help individuals develop independent thinking and better understand risks
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {[
                {
                  title: "Market Research",
                  description: "Analytical insights and sector-level observations",
                  icon: <TrendingUp className="w-6 h-6" />,
                  color: "from-green-500 to-emerald-500"
                },
                {
                  title: "Economic Analysis",
                  description: "Data interpretation and behavioral analysis",
                  icon: <BarChart3 className="w-6 h-6" />,
                  color: "from-emerald-500 to-teal-500"
                },
                {
                  title: "Educational Content",
                  description: "Research content for market understanding",
                  icon: <Brain className="w-6 h-6" />,
                  color: "from-teal-500 to-cyan-500"
                },
                {
                  title: "Decision Frameworks",
                  description: "Improve understanding of risks and probabilities",
                  icon: <Eye className="w-6 h-6" />,
                  color: "from-cyan-500 to-blue-500"
                }
              ].map((item, index) => (
                <div 
                  key={index} 
                  className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
                >
                  <div className={`w-14 h-14 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block mb-4">
                  <span className="text-sm font-semibold text-green-600 uppercase tracking-wider">Our Philosophy</span>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  Understanding matters more than prediction.
                </h2>
                
                <div className="space-y-6">
                  {[
                    {
                      statement: "Discipline matters more than excitement.",
                      description: "We believe in systematic approaches over emotional decisions."
                    },
                    {
                      statement: "Risk awareness matters more than returns.",
                      description: "Every investment decision starts with risk assessment."
                    },
                    {
                      statement: "Markets reward patience, logic, and preparation — not shortcuts.",
                      description: "Long-term thinking and informed judgment are key to sustainable success."
                    }
                  ].map((item, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                          <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">{item.statement}</h3>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-12 border-2 border-green-100">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Shield className="w-10 h-10 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Commitment</h3>
                    <div className="space-y-4">
                      <p className="text-gray-700">Transparency in research methodology</p>
                      <p className="text-gray-700">Responsible communication of insights</p>
                      <p className="text-gray-700">No false promises, no guaranteed outcomes</p>
                      <p className="text-gray-700">Continuous improvement in research quality</p>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-6 -right-6 bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-3 rounded-xl shadow-xl">
                  <p className="font-bold">SEBI Registered</p>
                  <p className="text-sm opacity-90">{userData.regNumber}</p>
                </div>
              </div>
            </div>

            <div className="mt-20 text-center max-w-3xl mx-auto">
              <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-2xl p-8 border border-green-200">
                <p className="text-2xl font-bold text-gray-900 mb-4">
                  Redwood Financial does not chase trends.
                </p>
                <p className="text-gray-600 text-lg">
                  We focus on long-term thinking, informed judgment, and clarity over noise.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600"></div>
          <div className="absolute inset-0 bg-tree-pattern opacity-10"></div>
          <div className="container mx-auto px-4 relative">
            <div className="max-w-3xl mx-auto text-center text-white">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Ready for Research Built on Clarity?
              </h2>
              <p className="text-xl mb-8 text-green-100">
                Connect with a SEBI Registered Research Analyst committed to transparent, 
                disciplined market understanding.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-block px-8 py-4 bg-white text-green-600 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300 hover:scale-105 shadow-xl"
                >
                  Start a Conversation
                </a>
                <a
                  href="/research"
                  className="inline-block px-8 py-4 bg-transparent border-2 border-white/30 text-white rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 hover:scale-105"
                >
                  Explore Our Research
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer userData={userData} />
      
      <style jsx>{`
        .bg-grid-pattern {
          background-image: 
            linear-gradient(to right, #05966922 1px, transparent 1px),
            linear-gradient(to bottom, #05966922 1px, transparent 1px);
          background-size: 50px 50px;
        }
        
        .bg-tree-pattern {
          background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 20L60 40H40L50 20Z' fill='white' opacity='0.2'/%3E%3Cpath d='M50 40L60 60H40L50 40Z' fill='white' opacity='0.2'/%3E%3Cpath d='M50 60L60 80H40L50 60Z' fill='white' opacity='0.2'/%3E%3C/svg%3E");
          background-size: 100px 100px;
        }
        
        .prose {
          line-height: 1.75;
        }
        
        .prose p {
          margin-bottom: 1.5em;
        }
      `}</style>
    </>
  );
}