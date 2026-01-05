'use client'
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import { userData } from "@/data/userData";
import { Shield, AlertTriangle, FileText, Lock, Scale, Mail, Phone } from "lucide-react";

export default function Disclaimer() {
  return (
    <>
      <Header userData={userData} />
      <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Hero Section */}
        <section className="pt-32 pb-20">
          <div className="max-w-7xl mx-auto px-3">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-3 bg-red-50 text-red-700 px-5 py-3 rounded-full text-sm font-medium mb-6">
                  <AlertTriangle className="w-5 h-5" />
                  Important Legal Disclaimer
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  Legal <span className="text-red-600">Disclaimer</span>
                </h1>
                <p className="text-xl text-gray-600">
                  Redwood Financial is registered with SEBI as a Research Entity under the SEBI (Research Analyst) Regulations, 2014
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Main Disclaimer Content */}
        <section className="pb-20">
          <div className="max-w-7xl mx-auto px-3">
            <div className="max-w-7xl mx-auto">
              {/* Registration Box */}
              <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 text-white mb-12 shadow-2xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center">
                    <Shield className="w-7 h-7" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">SEBI Registration</h2>
                    <p className="text-gray-300">Research Analyst Regulations, 2014</p>
                  </div>
                </div>
                <div className="bg-white/10 rounded-xl p-6">
                  <div className="text-center">
                    <p className="text-lg font-semibold mb-2">Registration Number</p>
                    <div className="inline-block bg-white text-gray-900 px-6 py-3 rounded-lg font-mono text-xl font-bold">
                      INH000021465
                    </div>
                    <p className="text-gray-300 mt-4">
                      Redwood Financial and its associates have not been debarred or suspended by SEBI or any other regulatory authority.
                    </p>
                  </div>
                </div>
              </div>

              {/* Disclaimer Sections */}
              <div className="space-y-8">
                {/* Information Accuracy */}
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                      <AlertTriangle className="w-6 h-6 text-red-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Information Accuracy & Reliability</h3>
                  </div>
                  <div className="prose prose-lg max-w-none text-gray-600">
                    <p>
                      The information, analysis, opinions, and views provided through our website, reports, publications, and services (&apos;Research Information&apos;) are believed to be reliable; however, <strong>Redwood Financial does not guarantee the accuracy, completeness, or adequacy of such information</strong>.
                    </p>
                    <p className="mt-4">
                      Users and investors are <strong>advised to independently evaluate</strong> market conditions, risks, and suitability before making any trading or investment decisions.
                    </p>
                  </div>
                </div>

                {/* Purpose & Limitations */}
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                      <FileText className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Purpose & Limitations of Research</h3>
                  </div>
                  <div className="space-y-4 text-gray-600">
                    <p>
                      The Research Information provided is <strong>not intended to be an exhaustive statement</strong> on any financial instruments, issuers, markets, or economic developments.
                    </p>
                    <p>
                      While reasonable care has been taken to ensure that the information is not misleading or incorrect at the time of publication, <strong>opinions expressed are subject to change without prior notice</strong>.
                    </p>
                    <p>
                      All research reports and content are provided <strong>for educational and informational purposes only</strong> and are meant for private use. Nothing contained on this website shall be construed as an offer, solicitation, or recommendation to buy or sell any securities or financial instruments.
                    </p>
                  </div>
                </div>

                {/* Market Risk Warning */}
                <div className="bg-red-50 rounded-2xl p-8 border-2 border-red-100">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-red-200 rounded-xl flex items-center justify-center">
                      <Scale className="w-6 h-6 text-red-700" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">Market Risk Warning</h3>
                      <p className="text-red-600 font-semibold mt-2">READ THIS SECTION CAREFULLY</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-white p-6 rounded-xl border border-red-200">
                      <p className="text-gray-800 font-semibold text-lg">
                        Investment in the securities market is subject to market risks. Users acknowledge that any decisions taken based on the Research Information are made at their own discretion and risk.
                      </p>
                    </div>
                    <p className="text-gray-700">
                      Redwood Financial shall not be liable for any losses, damages, or consequences arising directly or indirectly from the use of such information.
                    </p>
                  </div>
                </div>

                {/* Prohibited Actions */}
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                      <Lock className="w-6 h-6 text-purple-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Prohibited Actions & Intellectual Property</h3>
                  </div>
                  <div className="space-y-4 text-gray-600">
                    <p>
                      Users are <strong>strictly prohibited</strong> from forwarding, sharing, copying, reproducing, or redistributing any reports, calls, SMS, emails, or proprietary content provided by Redwood Financial, whether directly or indirectly.
                    </p>
                    <div className="bg-gray-50 p-5 rounded-xl border border-gray-200">
                      <p className="font-semibold text-gray-900 mb-2">⚠️ Legal Consequences:</p>
                      <p className="text-gray-700">
                        Any unauthorized use or distribution may result in strict legal action. All rights reserved. Unauthorized reproduction, copying, or distribution of any content from this website without prior written permission from Redwood Financial is strictly prohibited.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Terms of Use */}
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Terms of Use & Jurisdiction</h3>
                  <div className="space-y-4 text-gray-600">
                    <p>
                      By accessing <strong>https://www.redwoodglobal.in</strong>, you agree to abide by the terms and conditions stated herein.
                    </p>
                    <p>
                      The website may contain views of individual contributors that do not necessarily reflect the official views of Redwood Financial. External links, if any, are provided for convenience only, and Redwood Financial is not responsible for their content or updates.
                    </p>
                    <p>
                      All services are provided on a best-effort basis. Redwood Financial does not accept liability for service interruptions, technical errors, delays in communication (including SMS or email), or system failures beyond its control.
                    </p>
                  </div>
                </div>

                {/* Communication & Dispute Resolution */}
                <div className="bg-gray-50 rounded-2xl p-8 border-2 border-gray-200">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Communication & Dispute Resolution</h3>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                        <Mail className="w-5 h-5 text-gray-600" />
                        Communication Consent
                      </h4>
                      <p className="text-gray-700 pl-7">
                        By submitting your contact details or filling out any form on this website, you consent to receive communication (including calls, emails, or SMS) from Redwood Financial, even if your number is registered under the National &apos;Do Not Disturb&apos; (DND) registry.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                        <Phone className="w-5 h-5 text-gray-600" />
                        Dispute Resolution
                      </h4>
                      <div className="bg-white p-5 rounded-xl border border-gray-200 pl-7">
                        <p className="text-gray-700">
                          All disputes shall first be subject to mediation, and if unresolved, arbitration under Indian law. Any legal disputes shall be subject to the exclusive jurisdiction of courts in <strong>Indore, Madhya Pradesh, India</strong>.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Final Disclaimer */}
                <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-8 border-2 border-red-200">
                  <div className="text-center">
                    <AlertTriangle className="w-12 h-12 text-red-600 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Final Disclaimer</h3>
                    <p className="text-gray-700 text-lg">
                      We expressly disclaim all warranties, whether express or implied, to the fullest extent permitted under law. Redwood Financial reserves the right to terminate access and initiate legal proceedings in case of violation of proprietary rights.
                    </p>
                    <div className="mt-6 pt-6 border-t border-red-200">
                      <p className="text-sm text-gray-600">
                        Last Updated: {new Date().toLocaleDateString('en-IN', { 
                          day: 'numeric',
                          month: 'long',
                          year: 'numeric'
                        })}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Acknowledgment Box */}
              <div className="mt-12 bg-blue-50 rounded-2xl p-8 border-2 border-blue-200">
                <div className="text-center">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">By using this website, you acknowledge:</h4>
                  <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
                    <div className="bg-white p-4 rounded-lg border border-blue-100">
                      <p className="text-gray-700 text-sm">✓ I have read and understood this disclaimer</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-blue-100">
                      <p className="text-gray-700 text-sm">✓ I accept all terms and conditions</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-blue-100">
                      <p className="text-gray-700 text-sm">✓ I understand the market risks involved</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-blue-100">
                      <p className="text-gray-700 text-sm">✓ I will make independent investment decisions</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact for Clarification */}
        <section className="py-12 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center text-white">
              <h3 className="text-2xl font-bold mb-4">Need Clarification?</h3>
              <p className="text-gray-300 mb-6">
                If you have any questions about this disclaimer or our services, please contact us:
              </p>
              <a
                href="/contact"
                className="inline-block px-8 py-3 bg-white text-gray-900 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer userData={userData} />
      
      <style jsx>{`
        .prose p {
          margin-bottom: 1rem;
        }
        .prose p:last-child {
          margin-bottom: 0;
        }
      `}</style>
    </>
  );
}