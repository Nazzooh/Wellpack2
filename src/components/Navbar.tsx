import { motion, useScroll, useTransform } from "motion/react";
import { useState, useEffect } from "react";
import { Package, Menu, X, MessageCircle } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "About", href: "/about" },
  { name: "Industries", href: "/industries" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const location = useLocation();

  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(16, 16, 16, 0)", "rgba(16, 16, 16, 0.98)"]
  );

  const backdropBlur = useTransform(
    scrollY,
    [0, 100],
    ["blur(0px)", "blur(20px)"]
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Update background for non-home pages to always be visible
  const isHome = location.pathname === "/";
  const navBackground = isHome ? backgroundColor : "rgba(16, 16, 16, 0.98)";

  return (
    <>
      <motion.nav
        style={{
          backgroundColor: navBackground,
          backdropFilter: backdropBlur,
          WebkitBackdropFilter: backdropBlur
        }}
        className="fixed top-0 left-0 right-0 z-50 transition-shadow duration-500"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Elegant Top Border */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isScrolled || !isHome ? 1 : 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="h-px bg-gradient-to-r from-transparent via-[#A56F3D] to-transparent origin-center"
        />

        <div className="max-w-[1600px] mx-auto px-8 lg:px-16">
          <div className="flex items-center justify-between h-24">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center gap-4 group relative"
            >
              <div className="relative">
                <motion.div
                  className="w-12 h-12 bg-gradient-to-br from-[#A56F3D] to-[#8B5A2F] flex items-center justify-center"
                  whileHover={{ scale: 1.1, filter: "drop-shadow(0 0 10px rgba(165, 111, 61, 0.4))" }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Package className="w-7 h-7 text-white" />
                </motion.div>
                <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-[#B87333]" />
              </div>
              <div className="text-white">
                <div className="text-xl tracking-[-0.02em] font-light">WELL PACK</div>
                <div className="text-[9px] text-[#A56F3D] uppercase tracking-[0.2em] -mt-0.5 font-light">
                  Premium Packaging
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-2">
              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.href}
                  className="relative text-[#D4D1CC] hover:text-white px-5 py-3 text-[13px] uppercase tracking-[0.15em] font-light group"
                  aria-current={location.pathname === link.href ? "page" : undefined}
                >
                  <motion.span
                    className="relative z-10"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.1 + index * 0.05,
                      ease: [0.22, 1, 0.36, 1]
                    }}
                  >
                    {link.name}
                  </motion.span>
                  {location.pathname === link.href && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute bottom-2 left-5 right-5 h-px bg-[#A56F3D]"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.4 }}
                    />
                  )}
                  <div className="absolute bottom-2 left-5 right-5 h-px bg-gradient-to-r from-transparent via-[#A56F3D] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-center" />
                </Link>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <motion.a
              href="https://wa.me/916282370094"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:flex items-center gap-3 bg-gradient-to-r from-[#25D366] to-[#1fb855] text-white px-7 py-3.5 relative overflow-hidden group"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <motion.div
                className="absolute inset-0 bg-black/20"
                initial={{ x: "-100%", skewX: -15 }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              />
              <MessageCircle className="w-4 h-4 relative z-10" />
              <span className="text-[13px] uppercase tracking-[0.15em] font-light relative z-10">
                WhatsApp
              </span>
            </motion.a>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-white p-2"
              whileTap={{ scale: 0.9 }}
            >
              <motion.div
                animate={isMobileMenuOpen ? { rotate: 180 } : { rotate: 0 }}
                transition={{ duration: 0.3 }}
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </motion.div>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{
          height: isMobileMenuOpen ? "auto" : 0,
          opacity: isMobileMenuOpen ? 1 : 0,
        }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="lg:hidden overflow-hidden fixed top-24 left-0 right-0 bg-[#101010]/98 backdrop-blur-xl z-40"
      >
        <div className="px-8 py-8 space-y-2">
          {navLinks.map((link, index) => {
            const isActive = location.pathname === link.href;
            return (
              <Link
                key={index}
                to={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "block text-[#D4D1CC] hover:text-white py-4 px-6 uppercase text-sm tracking-[0.15em] font-light border-l-2 transition-all duration-300",
                  isActive
                    ? "border-[#A56F3D] bg-[#A56F3D]/10 text-white"
                    : "border-transparent hover:border-[#A56F3D] hover:bg-[#A56F3D]/10"
                )}
              >
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{
                    opacity: isMobileMenuOpen ? 1 : 0,
                    x: isMobileMenuOpen ? 0 : -20
                  }}
                  transition={{
                    delay: index * 0.05,
                    duration: 0.4,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                >
                  {link.name}
                </motion.div>
              </Link>
            );
          })}
          <motion.a
            href="https://wa.me/916282370094"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-gradient-to-r from-[#25D366] to-[#1fb855] text-white px-6 py-4 mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: isMobileMenuOpen ? 1 : 0,
              y: isMobileMenuOpen ? 0 : 20
            }}
            transition={{ delay: navLinks.length * 0.05 }}
          >
            <MessageCircle className="w-4 h-4" />
            <span className="uppercase text-sm tracking-[0.15em] font-light">WhatsApp</span>
          </motion.a>
        </div>
      </motion.div>
    </>
  );
}
