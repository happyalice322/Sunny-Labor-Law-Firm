import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Link, useLocation } from "react-router-dom";
import logoImg from "../assets/images/logo_sunny_labor_1779178911264.png";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    const preventRightClick = (e: MouseEvent) => e.preventDefault();
    
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("contextmenu", preventRightClick);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("contextmenu", preventRightClick);
    };
  }, []);

  const navLinks = [
    { name: "소개", href: "/#about" },
    { name: "서비스", href: "/#services" },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled || location.pathname !== "/" ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center group">
          <img 
            src={logoImg} 
            alt="노동법률사무소 맑은" 
            className="h-10 md:h-12 w-auto object-contain group-hover:scale-105 transition-transform" 
          />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={`text-sm font-medium transition-colors hover:text-brand-primary ${isScrolled || location.pathname !== "/" ? "text-slate-600" : "text-slate-600 md:text-white/90"}`}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="/#contact" 
            className="bg-brand-primary hover:bg-brand-dark text-white px-5 py-2 rounded-full text-sm font-semibold shadow-lg shadow-brand-primary/20 transition-all active:scale-95"
          >
            상담문의
          </a>
        </div>

        <button className="md:hidden text-slate-900" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white shadow-xl py-6 flex flex-col items-center gap-6 md:hidden border-t"
          >
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-slate-700">
                {link.name}
              </a>
            ))}
            <a 
              href="/#contact" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="bg-brand-primary text-white px-8 py-3 rounded-full font-bold shadow-lg"
            >
              상담문의
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
