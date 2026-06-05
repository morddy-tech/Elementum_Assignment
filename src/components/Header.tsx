import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";

// Sample navigation data - add this if not in your data file
const NAVIGATION_LINKS = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Work", href: "#work" },
  { name: "Insights", href: "#insights" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 md:h-24 flex items-center justify-between">
        {/* Logo */}
        <motion.a
          href="#home"
          id="header-logo"
          initial={{ opacity: 0, x: -15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="font-heading text-2xl md:text-3xl font-extrabold tracking-tight text-brand-dark"
        >
          Elementum
        </motion.a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10">
          {NAVIGATION_LINKS.map((link, idx) => (
            <motion.a
              key={link.name}
              id={`nav-link-${idx}`}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.08, ease: "easeOut" }}
              className="font-sans text-sm font-semibold tracking-wide text-gray-600 hover:text-brand-purple transition-colors relative group py-2"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-purple transition-all duration-300 group-hover:w-full" />
            </motion.a>
          ))}
        </nav>

        {/* Desktop Team Info Button */}
        <div className="hidden md:flex items-center">
          <motion.button
            id="nav-menu-btn-desktop"
            initial={{ opacity: 0, x: 15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            onClick={() => setIsDetailsOpen(!isDetailsOpen)}
            className="p-2 text-brand-dark hover:text-brand-purple hover:bg-gray-50 rounded-full transition-all flex flex-col justify-center items-end gap-1.5 w-10 h-10 group"
            aria-label="Team information"
          >
            <span className="w-6 h-0.5 bg-current transition-all duration-300 group-hover:w-5" />
            <span className="w-4 h-0.5 bg-current transition-all duration-300 group-hover:w-6" />
          </motion.button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center">
          <button
            id="mobile-menu-toggle"
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-brand-dark hover:text-brand-purple focus:outline-none z-50 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Desktop Team Details Drawer */}
      <AnimatePresence>
        {isDetailsOpen && (
          <>
            <motion.div
              id="desktop-details-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsDetailsOpen(false)}
              className="fixed inset-0 bg-black z-40 hidden md:block"
            />
            <motion.div
              id="desktop-details-content"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 w-96 bg-white shadow-2xl z-40 p-8 flex flex-col hidden md:flex overflow-y-auto"
            >
              <button
                onClick={() => setIsDetailsOpen(false)}
                className="absolute top-6 right-6 p-2 hover:bg-gray-100 rounded-full transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="mt-12 flex flex-col gap-8">
                <div>
                  <span className="font-heading text-xs uppercase tracking-widest text-brand-purple font-bold">
                    The Thinkers & Doers
                  </span>
                  <p className="font-sans text-lg font-semibold text-brand-dark mt-3 leading-relaxed">
                    The Thinkers and Doers were challenging the status quo with bold ideas and fearless execution.
                  </p>
                </div>

                <div>
                  <h4 className="font-sans text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">
                    Join the thinkers & doers
                  </h4>
                  <p className="font-sans text-gray-600 leading-relaxed">
                    We are a team of strategists, designers, communicators, researchers. 
                    Together, we believe that progress only happens when you refuse to play things safe.
                  </p>
                </div>

                <div>
                  <h4 className="font-sans text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">
                    Meet the team
                  </h4>
                  <div className="space-y-3">
                    <p className="font-sans text-brand-dark font-semibold">Alav</p>
                    <p className="font-sans text-brand-dark font-semibold">Ranimin</p>
                    <p className="font-sans text-brand-dark font-semibold">Cynthia</p>
                  </div>
                </div>

                <div className="border-t border-gray-100 pt-6 mt-auto">
                  <a
                    href="mailto:info@elementum.com"
                    className="font-sans text-sm font-semibold text-brand-purple hover:text-brand-dark transition-colors inline-flex items-center gap-2"
                  >
                    info@elementum.com
                    <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Mobile Drawer Overlay & Content - FIXED VERSION */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              id="mobile-drawer-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black z-40 md:hidden"
            />

            {/* Slide-out Drawer - Now with proper navigation visibility */}
            <motion.div
              id="mobile-drawer-content"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 w-4/5 max-w-sm bg-white shadow-2xl z-40 p-8 flex flex-col md:hidden overflow-y-auto"
            >
              {/* Navigation Section - Now clearly visible */}
              <div className="flex flex-col gap-8">
                <div>
                  <span className="font-heading text-xs uppercase tracking-widest text-brand-purple font-bold mb-4 block">
                    NAVIGATION
                  </span>
                  <div className="flex flex-col gap-4">
                    {NAVIGATION_LINKS.map((link, idx) => (
                      <motion.a
                        key={link.name}
                        id={`mobile-nav-link-${idx}`}
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className="font-display text-2xl font-bold text-brand-dark hover:text-brand-purple transition-colors py-2 border-b border-gray-100"
                      >
                        {link.name}
                      </motion.a>
                    ))}
                  </div>
                </div>

                {/* Team Info Section */}
                <div className="mt-4">
                  <span className="font-heading text-xs uppercase tracking-widest text-brand-purple font-bold mb-4 block">
                    The Thinkers & Doers
                  </span>
                  <p className="font-sans text-gray-700 leading-relaxed mb-4">
                    The Thinkers and Doers were challenging the status quo with bold ideas and fearless execution.
                  </p>
                  
                  <div className="bg-gray-50 p-4 rounded-lg mt-4">
                    <p className="font-sans text-sm font-semibold text-brand-dark mb-3">
                      Join the thinkers & doers.
                    </p>
                    <p className="font-sans text-sm text-gray-600 leading-relaxed mb-4">
                      We are a team of strategists, designers, communicators, researchers. Together, we believe that progress only happens when you refuse to play things safe.
                    </p>
                    <div className="flex gap-3 text-sm font-medium text-brand-purple">
                      <span>Alav</span>
                      <span>•</span>
                      <span>Ranimin</span>
                      <span>•</span>
                      <span>Cynthia</span>
                    </div>
                  </div>
                </div>

                {/* Footer */}
                <div className="border-t border-gray-100 pt-6 mt-auto">
                  <a
                    href="mailto:info@elementum.com"
                    className="font-sans text-sm font-semibold text-brand-dark hover:text-brand-purple transition-colors inline-flex items-center gap-2"
                  >
                    info@elementum.com
                    <span>→</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}