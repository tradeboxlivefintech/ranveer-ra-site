"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { userData } from "@/data/userData";
import { Menu, X, ChevronUp, Phone } from "lucide-react";
import Image from "next/image";

const Header = () => {
  const controls = useAnimation();
  const lastScrollY = useRef(0);
  const headerRef = useRef<null>(null);
  const [isShrunk, setIsShrunk] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isClient, setIsClient] = useState(false); // Add this
  const pathname = usePathname();

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Research", path: "/research" },
    { name: "Compliance", path: "/compliance" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  // Set isClient to true when component mounts (client-side only)
  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    // Don't run scroll handler on server
    if (!isClient) return;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const diff = currentScrollY - lastScrollY.current;
      
      setIsScrolled(currentScrollY > 50);

      // Scroll down → shrink
      if (diff > 5 && currentScrollY > 100 && !isShrunk) {
        setIsShrunk(true);
        controls.start("shrink");
      }

      // Scroll up → expand
      if (diff < -5 && isShrunk) {
        setIsShrunk(false);
        controls.start("expand");
      }

      // Close mobile menu on scroll
      if (isMenuOpen && currentScrollY > 50) {
        setIsMenuOpen(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls, isShrunk, isMenuOpen, isClient]); // Add isClient to dependencies

  // Close menu when clicking outside
  useEffect(() => {
    // Don't run on server
    if (!isClient) return;

    const handleClickOutside = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isClient]);

  // Calculate scroll progress (client-side only)
  const scrollProgress = isClient 
    ? window.scrollY / (document.body.scrollHeight - window.innerHeight)
    : 0;

  const scrollToTop = () => {
    if (isClient) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.header
        ref={headerRef}
        variants={{
          expand: {
            width: "100%",
            height: 92,
            borderRadius: 0,
            paddingLeft: "2rem",
            paddingRight: "2rem",
            top: 0,
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
          },
          shrink: {
            width: 280,
            height: 60,
            borderRadius: 999,
            paddingLeft: "1.25rem",
            paddingRight: "1.25rem",
            top: 20,
            boxShadow: "0 6px 25px rgba(59, 130, 246, 0.15)",
          },
        }}
        initial="expand"
        animate={controls}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 25,
        }}
        className="
          fixed left-1/2 -translate-x-1/2 z-50
          bg-white/98 backdrop-blur-xl
          flex items-center
          border border-white/20
          overflow-hidden
        "
        style={{
          background: isShrunk 
            ? 'linear-gradient(135deg, rgba(255,255,255,0.98) 0%, rgba(249,250,251,0.98) 100%)'
            : 'rgba(255, 255, 255, 0.98)',
        }}
      >
        {/* Background decorative element for shrunk state */}
        <motion.div
          initial={false}
          animate={{
            scale: isShrunk ? 1 : 0,
            opacity: isShrunk ? 1 : 0,
          }}
          className="absolute inset-0 bg-gradient-to-r from-blue-50/30 to-purple-50/30"
        />

        <div className="flex items-center justify-between w-full relative z-10">
          {/* Logo with enhanced styling */}
          <Link 
            href="/" 
            className="flex items-center gap-3 group"
            onClick={() => setIsMenuOpen(false)}
          >
            <motion.div
              whileHover={{ scale: 1.05, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              className="
                w-10 h-10 rounded-xl flex items-center justify-center
                overflow-hidden relative
                group-hover:shadow-blue-500/30 transition-all duration-300
              "
            >
              <Image
                src="/logo.jpeg"
                alt={`${userData.companyName} Logo`}
                fill
                sizes="40px"
                className="object-cover"
                priority
              />
            </motion.div>
            <div className="flex flex-col">
              <motion.h1 
                animate={{ 
                  opacity: 1,
                  x: 0,
                  scale: isShrunk ? 0.95 : 1
                }}
                transition={{ duration: 0.2 }}
                className="text-lg font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent whitespace-nowrap"
              >
                {userData.companyName}
              </motion.h1>

              {/* Hide only registration number when shrunk */}
              <motion.p
                animate={{ 
                  opacity: isShrunk ? 0 : 1,
                  height: isShrunk ? 0 : "auto"
                }}
                transition={{ duration: 0.2 }}
                className="text-xs text-gray-500 hidden sm:block font-medium overflow-hidden"
              >
                SEBI Reg: {userData.regNumber}
              </motion.p>
            </div>
          </Link>

          {/* Desktop navigation with enhanced animations */}
          <motion.nav
            variants={{
              expand: { 
                opacity: 1, 
                x: 0, 
                pointerEvents: "auto",
                transition: { staggerChildren: 0.05 }
              },
              shrink: { 
                opacity: 0, 
                x: 20, 
                pointerEvents: "none",
                transition: { staggerChildren: 0.05, staggerDirection: -1 }
              },
            }}
            className="hidden lg:flex items-center space-x-1"
          >
            {menuItems.map((item, index) => (
              <motion.div
                key={item.path}
                variants={{
                  expand: { opacity: 1, y: 0 },
                  shrink: { opacity: 0, y: 10 }
                }}
              >
                <Link
                  href={item.path}
                  className={`
                    relative px-4 py-2.5 rounded-lg font-medium text-sm
                    flex items-center gap-2 transition-all duration-200
                    ${pathname === item.path
                      ? "text-blue-600 bg-blue-50/80"
                      : "text-gray-600 hover:text-blue-600 hover:bg-blue-50/50"
                    }
                    group/nav-item
                  `}
                >
                  <span className="font-bold text-stone-900 text-[1.100rem]">{item.name}</span>
                  <span className={`
                    absolute bottom-1 left-1/2 -translate-x-1/2 h-0.5 rounded-full
                    bg-gradient-to-r from-blue-500 to-purple-500
                    transition-all duration-300
                    ${pathname === item.path ? "w-3/4" : "w-0 group-hover/nav-item:w-3/4"}
                  `} />
                </Link>
              </motion.div>
            ))}
          </motion.nav>

          {/* Mobile menu button with better animation */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="
              lg:hidden p-2.5 rounded-xl
              bg-gray-50 hover:bg-gray-100
              transition-colors duration-200
              relative
            "
          >
            <AnimatePresence mode="wait">
              {isMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                >
                  <X className="w-5 h-5 text-gray-700" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                >
                  <Menu className="w-5 h-5 text-gray-700" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Enhanced Mobile menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20, height: 0 }}
              animate={{ 
                opacity: 1, 
                y: 0, 
                height: "auto",
                transition: { type: "spring", damping: 25, stiffness: 300 }
              }}
              exit={{ 
                opacity: 0, 
                y: -20, 
                height: 0,
                transition: { duration: 0.2 }
              }}
              className="
                absolute top-full left-0 w-full 
                bg-white/95 backdrop-blur-xl border-t border-gray-100
                shadow-2xl shadow-black/5 lg:hidden overflow-hidden
              "
            >
              <div className="py-6 px-4 space-y-1">
                {menuItems.map((item) => (
                  <motion.div
                    key={item.path}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ type: "spring", damping: 25 }}
                  >
                    <Link
                      href={item.path}
                      onClick={() => setIsMenuOpen(false)}
                      className={`
                        flex items-center gap-3 px-4 py-3.5 rounded-xl
                        text-sm font-medium transition-all duration-200
                        ${pathname === item.path
                          ? "bg-blue-50 text-blue-600"
                          : "text-gray-700 hover:bg-gray-50"
                        }
                      `}
                    >
                      <span>{item.name}</span>
                      {pathname === item.path && (
                        <motion.div
                          layoutId="mobile-active"
                          className="ml-auto w-2 h-2 rounded-full bg-blue-500"
                        />
                      )}
                    </Link>
                  </motion.div>
                ))}
                
                <motion.div
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                  className="pt-4 mt-4 border-t border-gray-100"
                >
                  <Link
                    href="/contact"
                    onClick={() => setIsMenuOpen(false)}
                    className="
                      w-full px-6 py-3.5 bg-gradient-to-r from-blue-600 to-blue-700
                      text-white rounded-xl font-semibold text-sm
                      flex items-center justify-center gap-2
                      shadow-lg shadow-blue-500/25
                      hover:shadow-blue-500/40
                      transition-all duration-300
                    "
                  >
                    <Phone className="w-4 h-4" />
                    Schedule Free Consultation
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Scroll progress indicator - Only render on client */}
      {isClient && isScrolled && (
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          className="fixed top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 z-40 origin-left"
          style={{ scaleX: scrollProgress }}
        />
      )}

      {/* Scroll to top button - Only render on client */}
      {isClient && isScrolled && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="
            fixed bottom-8 right-8 z-40
            w-12 h-12 rounded-full
            bg-gradient-to-br from-blue-600 to-purple-600
            text-white shadow-2xl shadow-blue-500/30
            flex items-center justify-center
            hover:shadow-blue-500/50
            transition-all duration-300
          "
        >
          <ChevronUp className="w-5 h-5" />
        </motion.button>
      )}

      {/* Add padding to prevent content from hiding behind fixed header */}
      <div className="h-24" />
    </>
  );
};

export default Header;