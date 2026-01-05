import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import { userData } from "@/data/userData";

export default function Compliance() {
  return (
    <>
      <Header userData={userData} />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-b from-blue-50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Compliance & <span className="text-blue-600">Disclosures</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Complete transparency and regulatory compliance as per SEBI Research Analyst Regulations
              </p>
            </div>
          </div>
        </section>

        {/* Regulatory Information */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Regulatory <span className="text-blue-600">Information</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* SEBI Registration */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 border-2 border-blue-200">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white text-xl mr-4">
                    📜
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">SEBI Registration</h3>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Registration Number</p>
                    <p className="text-lg font-bold text-gray-900 font-mono">{userData.regNumber}</p>
                  </div>
                  
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Date of Registration</p>
                    <p className="text-gray-900">{userData.regDate}</p>
                  </div>
                  
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Validity</p>
                    <p className="text-gray-900">{userData.validity}</p>
                  </div>
                  
                  <div className="pt-4 border-t border-blue-200">
                    <p className="text-sm text-gray-600">
                      Registered under SEBI (Research Analyst) Regulations, 2014
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Officers */}
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 border-2 border-gray-200">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gray-700 rounded-xl flex items-center justify-center text-white text-xl mr-4">
                    📞
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Contact Officers</h3>
                </div>
                
                <div className="space-y-6">
                  {/* Compliance Officer */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Compliance Officer</h4>
                    <p className="text-gray-700">{userData.compliance.officer.name}</p>
                    <p className="text-sm text-gray-600">Email: {userData.compliance.officer.email}</p>
                    <p className="text-sm text-gray-600">Phone: {userData.compliance.officer.phone}</p>
                  </div>
                  
                  {/* Grievance Officer */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Grievance Officer</h4>
                    <p className="text-gray-700">{userData.compliance.grievance.name}</p>
                    <p className="text-sm text-gray-600">Email: {userData.compliance.grievance.email}</p>
                    <p className="text-sm text-gray-600">Phone: {userData.compliance.grievance.phone}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Important Disclosures */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Important <span className="text-blue-600">Disclosures</span>
              </h2>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="space-y-6">
                {[
                  {
                    title: "Investment Risk Disclosure",
                    content: "Investment in securities market are subject to market risks. Read all the related documents carefully before investing. Past performance may not be indicative of future results."
                  },
                  {
                    title: "No Guarantee of Returns",
                    content: "We do not guarantee any returns or assure profit. All investment decisions should be made based on your own risk assessment and financial goals."
                  },
                  {
                    title: "Research Limitations",
                    content: "Our research is based on publicly available information and our analysis. Market conditions may change rapidly, making past research outdated."
                  },
                  {
                    title: "Client Responsibilities",
                    content: "Clients are responsible for their own investment decisions. Our research should be considered as one of many inputs in the decision-making process."
                  }
                ].map((disclosure, index) => (
                  <div key={index} className="p-6 bg-gray-50 rounded-xl">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">{disclosure.title}</h3>
                    <p className="text-gray-600">{disclosure.content}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Grievance Redressal */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Grievance <span className="text-blue-600">Redressal</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center text-white text-xl mr-4">
                    ⚠️
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">For Investor Grievances</h3>
                </div>
                
                <div className="space-y-4">
                  <p className="text-gray-700">
                    In case of any grievance or complaint, please contact our Grievance Officer:
                  </p>
                  
                  <div className="bg-white p-4 rounded-lg">
                    <p className="font-semibold text-gray-900">{userData.compliance.grievance.name}</p>
                    <p className="text-gray-600">Email: {userData.compliance.grievance.email}</p>
                    <p className="text-gray-600">Phone: {userData.compliance.grievance.phone}</p>
                  </div>
                  
                  <p className="text-sm text-gray-600">
                    We strive to resolve all grievances within 30 days of receipt.
                  </p>
                </div>
              </div>

              <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white text-xl mr-4">
                    🏛️
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">SEBI SCORES Portal</h3>
                </div>
                
                <div className="space-y-4">
                  <p className="text-gray-700">
                    Investors can also register complaints on SEBI&apos;s centralized web-based grievance redress system:
                  </p>
                  
                  <a
                    href="https://scores.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Visit SEBI SCORES Portal
                  </a>
                  
                  <p className="text-sm text-gray-600">
                    SCORES (SEBI Complaints Redress System) facilitates online submission and tracking of investor complaints.
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
              Committed to Transparency & Compliance
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-100">
              We maintain the highest standards of regulatory compliance and investor protection
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-3 bg-white text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-colors"
            >
              Contact for Clarifications
            </a>
          </div>
        </section>
      </main>
      <Footer userData={userData} />
    </>
  );
}