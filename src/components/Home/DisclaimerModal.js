"use client";
import { useEffect, useState, useCallback, useRef } from "react";

export default function DisclaimerModal() {
  const [open, setOpen] = useState(false);
  const [showHindi, setShowHindi] = useState(false);
  const [acceptedEnglish, setAcceptedEnglish] = useState(false);
  const [acceptedHindi, setAcceptedHindi] = useState(false);
  const [showScrollHint, setShowScrollHint] = useState(true);
  const contentRef = useRef(null);
  const modalRef = useRef(null);

  const englishDisclaimer = `
📢 **Important Legal & Regulatory Disclaimer**

• **Market Risk Warning**: Investments in the securities market are subject to market risks. Past performance does not indicate future returns. Please read all related documents carefully before investing.

• **No Guarantee of Returns**: Registration with SEBI, exchange memberships, or certifications do not guarantee any assured returns or performance.

• **No Warranty**: Redwood Financial makes no commitment, representation, warranty, or guarantee regarding the accuracy, completeness, quality, or performance of the services or information provided through its website, emails, WhatsApp, or any other communication channels.

• **No Profit Sharing**: We do not offer any profit-sharing services under any circumstances.

• **🚫 Security Alert**: Never share your DEMAT account details (User ID, password, OTP, etc.) with anyone. Redwood Finance representatives will never ask for such sensitive information. Sharing such information may lead to financial fraud and unauthorized transactions.

• **💳 Payment Security**: Payments must be made only through the official bank account details mentioned on the Redwood Finance website. We do not accept payments through any other accounts. Always verify payment details from our official website before making any transaction.

📩 **Official Communication Channels**
All official communication from us will be sent:
• With the verified header "REDWOOD Financial"
• Via WhatsApp from our official number: +91 9691536857
• From email addresses ending with @redwoodfinance.in

Redwood Financial will not be responsible for any actions taken based on messages, calls, or communications that do not originate from the above verified sources.

⚠️ **Scam Alert**
Remain vigilant against scammers misusing the name Redwood Financial on social media platforms such as Instagram, WhatsApp, Telegram, Facebook, or any other platform. Report suspicious activities immediately.

📞 **Contact Information**
For assistance or payment-related queries, contact us only at: +91 9691536857
(Monday to Saturday, 10:00 AM to 6:00 PM IST)
  `;

  const hindiDisclaimer = `
📢 **महत्वपूर्ण कानूनी एवं नियामक अस्वीकरण**

• **बाज़ार जोखिम चेतावनी**: प्रतिभूति बाज़ार में निवेश बाज़ार जोखिमों के अधीन हैं। पिछला प्रदर्शन भविष्य के रिटर्न की गारंटी नहीं है। कृपया निवेश करने से पहले सभी संबंधित दस्तावेज़ों को ध्यानपूर्वक पढ़ें।

• **रिटर्न की कोई गारंटी नहीं**: SEBI पंजीकरण, एक्सचेंज सदस्यता या प्रमाणपत्र किसी भी प्रकार के निश्चित रिटर्न या प्रदर्शन की गारंटी नहीं देते।

• **कोई वारंटी नहीं**: REDWOOD Financial किसी भी सेवा या जानकारी की सटीकता, पूर्णता, गुणवत्ता या प्रदर्शन को लेकर कोई वादा, प्रतिनिधित्व, वारंटी या गारंटी नहीं देता है।

• **लाभ साझाकरण सेवाएँ नहीं**: हम किसी भी परिस्थिति में लाभ साझाकरण सेवाएँ प्रदान नहीं करते।

• **🚫 सुरक्षा चेतावनी**: अपने डीमैट खाते का विवरण (यूज़र आईडी, पासवर्ड, ओटीपी आदि) किसी के साथ साझा न करें। REDWOOD Financial के प्रतिनिधि कभी भी ऐसी संवेदनशील जानकारी नहीं मांगेंगे। ऐसा करने से वित्तीय धोखाधड़ी और अनधिकृत लेनदेन हो सकता है।

• **💳 भुगतान सुरक्षा**: भुगतान केवल REDWOOD Financial की आधिकारिक वेबसाइट पर उल्लिखित बैंक खाता विवरण पर ही करें। हम किसी अन्य खाते में भुगतान स्वीकार नहीं करते। किसी भी लेनदेन से पहले हमेशा हमारी आधिकारिक वेबसाइट से विवरण सत्यापित करें।

📩 **आधिकारिक संचार चैनल**
हमारे द्वारा सभी आधिकारिक संचार भेजे जाएंगे:
• सत्यापित हेडर "REDWOOD Financial" के साथ
• हमारे आधिकारिक व्हाट्सएप नंबर +91 9691536857 से
• @redwoodfinance.in समाप्त होने वाले ईमेल पते से

उपरोक्त सत्यापित स्रोतों के अलावा किसी अन्य स्रोत से प्राप्त संदेशों, कॉलों या संचार पर की गई कार्रवाई की जिम्मेदारी REDWOOD Financial की नहीं होगी।

⚠️ **धोखाधड़ी चेतावनी**
सोशल मीडिया प्लेटफॉर्म (इंस्टाग्राम, व्हाट्सएप, टेलीग्राम, फेसबुक आदि) पर REDWOOD Financial के नाम का दुरुपयोग करने वाले धोखेबाजों के प्रति सजग रहें। संदिग्ध गतिविधियों की तुरंत रिपोर्ट करें।

📞 **संपर्क जानकारी**
सहायता या भुगतान संबंधित प्रश्नों के लिए, केवल हमसे संपर्क करें: +91 9691536857
(सोमवार से शनिवार, सुबह 10:00 बजे से शाम 6:00 बजे तक आईएसटी)
  `;

  useEffect(() => {
  const hasAcceptedEnglish = localStorage.getItem("acceptedEnglishDisclaimer");
  const hasAcceptedHindi = localStorage.getItem("acceptedHindiDisclaimer");
  
  // Fix: Wrap in setTimeout
  setTimeout(() => {
    if (!hasAcceptedEnglish || !hasAcceptedHindi) {
      setOpen(true);
    }
  }, 0);
}, []);

    

  const handleScroll = useCallback(() => {
    if (contentRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = contentRef.current;
      const isScrolledToBottom = scrollTop + clientHeight >= scrollHeight - 20;
      setShowScrollHint(!isScrolledToBottom);
    }
  }, []);

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.addEventListener('scroll', handleScroll);
      return () => contentRef.current?.removeEventListener('scroll', handleScroll);
    }
  }, [handleScroll, showHindi]);

  const handleAcceptEnglish = () => {
    localStorage.setItem("acceptedEnglishDisclaimer", "true");
    localStorage.setItem("englishAcceptedTimestamp", new Date().toISOString());
    setAcceptedEnglish(true);
    setShowHindi(true);
    // Reset scroll position
    if (contentRef.current) {
      contentRef.current.scrollTop = 0;
      setShowScrollHint(true);
    }
  };

  const handleAcceptHindi = () => {
    localStorage.setItem("acceptedHindiDisclaimer", "true");
    localStorage.setItem("hindiAcceptedTimestamp", new Date().toISOString());
    setAcceptedHindi(true);
    document.body.style.overflow = 'auto';
    setOpen(false);
  };

  const handleLanguageToggle = () => {
    setShowHindi(!showHindi);
    if (contentRef.current) {
      contentRef.current.scrollTop = 0;
      setShowScrollHint(true);
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm">
      {/* Modal Container with subtle animation */}
      <div 
        ref={modalRef}
        className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-300 animate-fade-in-up"
        role="dialog"
        aria-modal="true"
        aria-labelledby="disclaimer-title"
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-red-700 via-red-600 to-orange-600 p-6 text-center relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-white rounded-full translate-x-1/3 translate-y-1/3"></div>
          </div>
          
          <div className="relative flex flex-col items-center justify-center gap-3">
            
            <h1 id="disclaimer-title" className="text-3xl font-bold text-white tracking-tight">
              LEGAL DISCLAIMER
            </h1>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-white/60 rounded-full animate-pulse"></span>
              <p className="text-white/95 text-lg font-medium">
                {showHindi ? "महत्वपूर्ण कानूनी अस्वीकरण" : "Mandatory Compliance Notice"}
              </p>
              <span className="w-2 h-2 bg-white/60 rounded-full animate-pulse" style={{animationDelay: '0.3s'}}></span>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/30">
            <div 
              className={`h-full transition-all duration-500 ${
                showHindi ? 'w-full bg-green-400' : 'w-1/2 bg-blue-400'
              }`}
            ></div>
          </div>
        </div>

        {/* Language Selection */}
        <div className="flex justify-between items-center bg-gradient-to-r from-gray-50 to-gray-100 p-4 border-b border-gray-200">
          <div className="text-sm text-gray-600 font-medium">
            Select Language / भाषा चुनें
          </div>
          <div className="flex items-center gap-2">
            <span className={`text-sm font-medium ${!showHindi ? 'text-blue-600' : 'text-gray-500'}`}>
              English
            </span>
            <div className="flex items-center gap-3">
  
  
  <button
    onClick={handleLanguageToggle}
    className="relative inline-flex h-6 w-12 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
    style={{
      backgroundColor: showHindi ? '#ea580c' : '#3b82f6' // Orange for Hindi, Blue for English
    }}
    aria-label={showHindi ? "Switch to English" : "Switch to Hindi"}
    aria-pressed={showHindi}
  >
    <span className="sr-only">Toggle language</span>
    <span
      aria-hidden="true"
      className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
        showHindi ? 'translate-x-6' : 'translate-x-0'
      }`}
    />
  </button>
  
  
</div>
            <span className={`text-sm font-medium ${showHindi ? 'text-orange-600' : 'text-gray-500'}`}>
              हिंदी
            </span>
          </div>
        </div>

        {/* Content Area with Scroll Hint */}
        <div className="relative">
          <div 
            ref={contentRef}
            className="p-8 max-h-[50vh] overflow-y-auto scroll-smooth"
            onScroll={handleScroll}
          >
            {!showHindi ? (
              <div className="space-y-6">
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <span className="text-blue-600 text-xl">📜</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-blue-800 text-lg mb-2">
                        Compliance Requirement
                      </h3>
                      <p className="text-blue-700">
                        This disclaimer is mandatory as per SEBI guidelines (Regulation 3(a) of SEBI (Investment Advisers) Regulations, 2013) and financial regulations. You must read and accept both English and Hindi versions.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-5">
                  {englishDisclaimer.split('\n\n').map((paragraph, index) => (
                    <div key={index} className="animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                      {paragraph.split('\n').map((line, lineIndex) => {
                        if (line.startsWith('📢')) {
                          return (
                            <h2 key={lineIndex} className="text-2xl font-bold text-gray-900 mb-4 mt-6 flex items-center gap-2">
                              <span>📢</span>
                              {line.replace('📢 ', '')}
                            </h2>
                          );
                        } else if (line.startsWith('•')) {
                          return (
                            <div key={lineIndex} className="flex items-start gap-3 mb-3 group">
                              <span className="flex-shrink-0 w-6 h-6 bg-red-100 text-red-600 rounded-full flex items-center justify-center mt-0.5 group-hover:scale-110 transition-transform">
                                •
                              </span>
                              <p className="text-gray-800 leading-relaxed">{line.substring(2)}</p>
                            </div>
                          );
                        } else if (line.startsWith('📩') || line.startsWith('⚠️') || line.startsWith('📞')) {
                          return (
                            <div key={lineIndex} className="mt-6 mb-4">
                              <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg ${
                                line.startsWith('📩') ? 'bg-purple-100 text-purple-800' :
                                line.startsWith('⚠️') ? 'bg-red-100 text-red-800' :
                                'bg-blue-100 text-blue-800'
                              }`}>
                                <span className="text-lg">{line.charAt(0)}</span>
                                <strong className="font-bold">{line.substring(1)}</strong>
                              </div>
                            </div>
                          );
                        } else if (line.startsWith('🚫') || line.startsWith('💳')) {
                          return (
                            <div key={lineIndex} className="bg-red-50 border-l-4 border-red-500 p-4 my-4 rounded-r-lg">
                              <div className="flex items-start gap-3">
                                <span className="text-2xl">{line.charAt(0)}</span>
                                <p className="text-red-800 font-medium">{line.substring(1)}</p>
                              </div>
                            </div>
                          );
                        }
                        return null;
                      })}
                    </div>
                  ))}
                </div>

                <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-5 mt-8">
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-600 text-2xl">📋</span>
                    </div>
                    <div>
                      <p className="text-green-800 font-semibold text-lg">
                        Acknowledgment Required
                      </p>
                      <p className="text-green-700">
                        By clicking &apos;ACCEPT&apos;, you confirm that you have read, understood, and agree to comply with all the terms and conditions mentioned above. This acknowledgment will be recorded.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="bg-orange-50 border border-orange-200 rounded-xl p-5">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                      <span className="text-orange-600 text-xl">📜</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-orange-800 text-lg mb-2">
                        अनुपालन आवश्यकता
                      </h3>
                      <p className="text-orange-700">
                        यह अस्वीकरण सेबी दिशानिर्देशों (सेबी (निवेश सलाहकार) विनियम, 2013 के विनियम 3(ए)) और वित्तीय विनियमों के अनुसार अनिवार्य है। आपको अंग्रेजी और हिंदी दोनों संस्करणों को पढ़ना और स्वीकार करना होगा।
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-5">
                  {hindiDisclaimer.split('\n\n').map((paragraph, index) => (
                    <div key={index} className="animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                      {paragraph.split('\n').map((line, lineIndex) => {
                        if (line.startsWith('📢')) {
                          return (
                            <h2 key={lineIndex} className="text-2xl font-bold text-gray-900 mb-4 mt-6 flex items-center gap-2">
                              <span>📢</span>
                              {line.replace('📢 ', '')}
                            </h2>
                          );
                        } else if (line.startsWith('•')) {
                          return (
                            <div key={lineIndex} className="flex items-start gap-3 mb-3 group">
                              <span className="flex-shrink-0 w-6 h-6 bg-red-100 text-red-600 rounded-full flex items-center justify-center mt-0.5 group-hover:scale-110 transition-transform">
                                •
                              </span>
                              <p className="text-gray-800 leading-relaxed text-justify">{line.substring(2)}</p>
                            </div>
                          );
                        } else if (line.startsWith('📩') || line.startsWith('⚠️') || line.startsWith('📞')) {
                          return (
                            <div key={lineIndex} className="mt-6 mb-4">
                              <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg ${
                                line.startsWith('📩') ? 'bg-purple-100 text-purple-800' :
                                line.startsWith('⚠️') ? 'bg-red-100 text-red-800' :
                                'bg-blue-100 text-blue-800'
                              }`}>
                                <span className="text-lg">{line.charAt(0)}</span>
                                <strong className="font-bold">{line.substring(1)}</strong>
                              </div>
                            </div>
                          );
                        } else if (line.startsWith('🚫') || line.startsWith('💳')) {
                          return (
                            <div key={lineIndex} className="bg-red-50 border-l-4 border-red-500 p-4 my-4 rounded-r-lg">
                              <div className="flex items-start gap-3">
                                <span className="text-2xl">{line.charAt(0)}</span>
                                <p className="text-red-800 font-medium">{line.substring(1)}</p>
                              </div>
                            </div>
                          );
                        }
                        return null;
                      })}
                    </div>
                  ))}
                </div>

                <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-5 mt-8">
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-600 text-2xl">📋</span>
                    </div>
                    <div>
                      <p className="text-green-800 font-semibold text-lg">
                        स्वीकृति आवश्यक
                      </p>
                      <p className="text-green-700">
                        &apos;स्वीकार करें&apos; पर क्लिक करके, आप पुष्टि करते हैं कि आपने उपरोक्त सभी नियमों और शर्तों को पढ़ा, समझा और उनका पालन करने के लिए सहमत हैं। यह स्वीकृति दर्ज की जाएगी।
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Scroll Hint */}
          {showScrollHint && (
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-white to-transparent h-16 flex items-end justify-center pb-2 animate-bounce">
              <div className="text-center">
                <div className="text-gray-500 text-sm font-medium mb-1">
                  Scroll to read full content
                </div>
                <div className="w-6 h-10 border-2 border-gray-300 rounded-full mx-auto relative">
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 w-1 h-2 bg-gray-400 rounded-full animate-scroll-hint"></div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer with Acceptance Button */}
        <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 border-t border-gray-200">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="text-center lg:text-left">
              <div className="flex items-center gap-4 mb-2">
                <div className="text-sm text-gray-700 font-medium">
                  <span className="inline-flex items-center gap-1">
                    <span className={`w-2 h-2 rounded-full ${acceptedEnglish ? 'bg-green-500' : 'bg-yellow-500'}`}></span>
                    English: {acceptedEnglish ? 'Accepted ✓' : 'Pending'}
                  </span>
                  <span className="mx-3 text-gray-400">|</span>
                  <span className="inline-flex items-center gap-1">
                    <span className={`w-2 h-2 rounded-full ${acceptedHindi ? 'bg-green-500' : 'bg-yellow-500'}`}></span>
                    Hindi: {acceptedHindi ? 'स्वीकृत ✓' : 'लंबित'}
                  </span>
                </div>
              </div>
              <p className="text-xs text-gray-600">
                Both disclaimers must be accepted to proceed. Your acceptance is recorded for compliance purposes.
              </p>
            </div>
            
            <div className="flex gap-4">
              {!showHindi ? (
                <button
                  onClick={handleAcceptEnglish}
                  disabled={acceptedEnglish}
                  className="px-10 py-3.5 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-3 group disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-4 focus:ring-green-500 focus:ring-offset-2"
                >
                  <span className="text-xl group-hover:scale-110 transition-transform">✓</span>
                  <div className="text-left">
                    <div className="text-lg">ACCEPT ENGLISH</div>
                    <div className="text-xs opacity-90">Continue to Hindi</div>
                  </div>
                </button>
              ) : (
                <button
                  onClick={handleAcceptHindi}
                  disabled={acceptedHindi}
                  className="px-10 py-3.5 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-3 group disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-4 focus:ring-green-500 focus:ring-offset-2"
                >
                  <span className="text-xl group-hover:scale-110 transition-transform">✓</span>
                  <div className="text-left">
                    <div className="text-lg">हिंदी स्वीकार करें</div>
                    <div className="text-xs opacity-90">Complete Registration</div>
                  </div>
                </button>
              )}
            </div>
          </div>

          {/* Progress Steps */}
          <div className="mt-6">
            <div className="flex items-center justify-between max-w-md mx-auto">
              <div className="flex flex-col items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${
                  !showHindi ? 'bg-blue-600 text-white ring-4 ring-blue-200' : 'bg-gray-200 text-gray-700'
                }`}>
                  {acceptedEnglish ? '✓' : '1'}
                </div>
                <span className="text-sm font-medium">English</span>
              </div>
              <div className="h-1 w-20 bg-gray-300">
                <div className={`h-full transition-all duration-500 ${
                  showHindi ? 'w-full bg-green-500' : 'w-0'
                }`}></div>
              </div>
              <div className="flex flex-col items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${
                  showHindi ? 'bg-orange-600 text-white ring-4 ring-orange-200' : 'bg-gray-200 text-gray-700'
                }`}>
                  {acceptedHindi ? '✓' : '2'}
                </div>
                <span className="text-sm font-medium">हिंदी</span>
              </div>
            </div>
          </div>
        </div>

        {/* Emergency Close */}
        <button
          onClick={() => {
            {
              setOpen(false);
              document.body.style.overflow = 'auto';
            }
          }}
          className="absolute top-4 curser-pointer right-4 w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400"
          aria-label="Emergency close modal"
          title="Close (not recommended)"
        >
          <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Add CSS animations */}
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes scroll-hint {
          0%, 100% { transform: translateY(0); opacity: 0.4; }
          50% { transform: translateY(5px); opacity: 1; }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.5s ease-out;
        }
        .animate-scroll-hint {
          animation: scroll-hint 2s infinite;
        }
      `}</style>
    </div>
  );
}