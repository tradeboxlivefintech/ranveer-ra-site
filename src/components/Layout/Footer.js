'use client'
import Link from "next/link";
import { userData } from "@/data/userData";
import {motion} from "framer-motion";
import Image from 'next/image';
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-4 gap-8 py-12">
          {/* Company Info */}
         {/* Company Info */}
<div className="lg:col-span-2">
  <Link href="/" className="flex items-center gap-4 mb-6">
    <div className="w-12 h-12 rounded-xl overflow-hidden bg-white flex items-center justify-center">
      <Image
        src="/logo.jpeg"
        alt={`${userData.companyName} logo`}
        width={48}
        height={48}
        className="object-contain"
        priority
      />
    </div>

    <div>
      <h3 className="text-xl font-bold text-white">
        {userData.companyName}
      </h3>
      <p className="text-gray-400 text-sm">
        SEBI Registered Research Analyst
      </p>
    </div>
  </Link>

  <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
    Providing professional equity research and investment advisory
    services with complete regulatory compliance and transparency.
  </p>

  <div className="flex space-x-4">
    {Object.entries(userData.social).map(([platform, url]) => (
      <a
        key={platform}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-300 hover:text-blue-400 hover:bg-gray-700 transition-colors"
        aria-label={platform}
      >
        {platform === "linkedin" && "in"}
        {platform === "twitter" && "𝕏"}
        {platform === "instagram" && "📸"}
        {platform === "youtube" && "▶"}
      </a>
    ))}
  </div>
</div>


          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Services</h4>
            <ul className="space-y-3">
              {userData.services.map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services#${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/research"
                  className="text-gray-300 hover:text-blue-400"
                >
                  Research Methodology
                </Link>
              </li>
              <li>
                <Link
                  href="/compliance"
                  className="text-gray-300 hover:text-blue-400"
                >
                  Compliance & Disclosures
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Contact</h4>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start space-x-3">
                <span>📍</span>
                <span>
                  {userData.contact.address.line1},<br />
                  {userData.contact.address.line2},<br />
                  {userData.contact.address.city} -{" "}
                  {userData.contact.address.pincode}
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <span>📞</span>
                <span>{userData.contact.phone}</span>
              </li>
              <li className="flex items-center space-x-3">
                <span>✉️</span>
                <span>{userData.contact.email}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Compliance & Disclaimer */}
        <div className="border-t border-gray-800 py-8">
          <div className="bg-gray-800/50 rounded-xl p-6">
            <h5 className="font-semibold mb-4 text-blue-400">
              Regulatory Compliance
            </h5>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-gray-300 text-sm mb-2">
                  <strong>SEBI Registration:</strong> {userData.regNumber}
                </p>
                <p className="text-gray-300 text-sm">
                  <strong>Validity:</strong> {userData.validity}
                </p>
              </div>
              <div>
                <p className="text-gray-300 text-sm">
                  <strong>Compliance Officer:</strong>{" "}
                  {userData.compliance.officer.name}
                </p>
                <p className="text-gray-300 text-sm">
                  Email: {userData.compliance.officer.email}
                </p>
              </div>
            </div>
            <p className="text-gray-300 text-sm mt-4 leading-relaxed">
              <strong>Disclaimer:</strong> Investment in securities market are
              subject to market risks. Read all related documents carefully
              before investing. Past performance may not be indicative of future
              results. We do not guarantee any returns or assure profit.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
            <p>
              © {currentYear} {userData.companyName}. All rights reserved.
            </p>

            <h1 className="text-green-400 font-bold">Crafted By TradeBox</h1>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="hover:text-blue-400">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-blue-400">
                Terms & Conditions
              </Link>
               <Link href="/disclaimer" className="hover:text-blue-400">
                Disclaimer
              </Link>
              <a
                href="https://scores.gov.in"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400"
              >
                SEBI SCORES
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;