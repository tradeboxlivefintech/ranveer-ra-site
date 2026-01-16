"use client";

const NoticeBar = () => {
  return (
    <div className=" w-full bg-gradient-to-r from-red-600 to-red-700 text-white overflow-hidden z-50 shadow-lg">
      <div className="py-3 overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee">
          {/* Duplicate content multiple times for seamless loop */}
          {[...Array(6)].map((_, index) => (
            <div key={index} className="inline-flex items-center mx-8">
              {/* Warning Icon */}
              <span className="inline-flex items-center justify-center w-6 h-6 bg-white/20 rounded-full mr-3 flex-shrink-0">
                <span className="text-xs">⚠️</span>
              </span>
              
              {/* English Text */}
              <span className="text-sm font-medium tracking-wide mr-4">
                <span className="font-bold">IMPORTANT:</span> Pay only through official accounts listed on website.
              </span>
              
              {/* Separator */}
              <span className="text-white/50 mx-2">|</span>
              
              {/* Hindi Text */}
              <span className="text-sm font-medium tracking-wide mr-4">
                <span className="font-bold">सूचना:</span> भुगतान केवल वेबसाइट पर सूचीबद्ध आधिकारिक खातों से करें।
              </span>
              
              {/* Separator */}
              <span className="text-white/50 mx-2">|</span>
              
              {/* Contact */}
              <span className="text-sm font-medium tracking-wide">
                <span className="font-bold">Verify:</span> Call +91-XXXXXXXXXX
              </span>
            </div>
          ))}
        </div>
      </div>
      
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-marquee {
          animation: marquee 90s linear infinite;
          display: inline-block;
          white-space: nowrap;
        }
      `}</style>
    </div>
  );
};

export default NoticeBar;