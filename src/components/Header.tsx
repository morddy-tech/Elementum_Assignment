import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";

// Sample navigation data
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
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <motion.a
          href="#home"
          id="header-logo"
          initial={{ opacity: 0, x: -15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="font-heading text-xl font-bold tracking-tight text-brand-dark"
        >
          Elementum
        </motion.a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {NAVIGATION_LINKS.map((link, idx) => (
            <motion.a
              key={link.name}
              id={`nav-link-${idx}`}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.08, ease: "easeOut" }}
              className="font-sans text-sm font-medium text-gray-600 hover:text-brand-purple transition-colors relative group py-1"
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
            className="p-1.5 text-brand-dark hover:text-brand-purple hover:bg-gray-50 rounded-md transition-all"
            aria-label="Team information"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </motion.button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center">
          <button
            id="mobile-menu-toggle"
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-brand-dark hover:text-brand-purple focus:outline-none z-50 rounded-md hover:bg-gray-50 transition-colors"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
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
              className="fixed right-0 top-0 bottom-0 w-80 bg-white shadow-xl z-40 p-6 flex flex-col hidden md:flex"
            >
              <button
                onClick={() => setIsDetailsOpen(false)}
                className="absolute top-4 right-4 p-1.5 hover:bg-gray-100 rounded-md transition-colors"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
              
              <div className="flex flex-col gap-6 h-full mt-8">
                <div>
                  <span className="font-heading text-xs uppercase tracking-wider text-brand-purple font-semibold">
                    The Thinkers & Doers
                  </span>
                  <p className="font-sans text-base font-medium text-brand-dark mt-2 leading-relaxed">
                    The Thinkers and Doers were challenging the status quo with bold ideas and fearless execution.
                  </p>
                </div>

                <div>
                  <h4 className="font-sans text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
                    Join the thinkers & doers
                  </h4>
                  <p className="font-sans text-sm text-gray-600 leading-relaxed">
                    We are a team of strategists, designers, communicators, researchers. 
                    Together, we believe that progress only happens when you refuse to play things safe.
                  </p>
                </div>

                <div>
                  <h4 className="font-sans text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
                    Meet the team
                  </h4>
                  <div className="space-y-2">
                    <p className="font-sans text-sm text-brand-dark font-medium">Alav</p>
                    <p className="font-sans text-sm text-brand-dark font-medium">Ranimin</p>
                    <p className="font-sans text-sm text-brand-dark font-medium">Cynthia</p>
                  </div>
                </div>

                <div className="border-t border-gray-100 pt-4 mt-auto">
                  <a
                    href="mailto:info@elementum.com"
                    className="font-sans text-sm font-medium text-brand-purple hover:text-brand-dark transition-colors inline-flex items-center gap-1"
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

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              id="mobile-drawer-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black z-40 md:hidden"
            />
            <motion.div
              id="mobile-drawer-content"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 w-4/5 max-w-sm bg-white shadow-xl z-40 p-6 flex flex-col md:hidden"
            >
              <div className="flex-1 flex flex-col justify-center gap-6">
                <div>
                  <span className="font-heading text-xs uppercase tracking-wider text-brand-purple font-semibold mb-3 block">
                    NAVIGATION
                  </span>
                  <div className="flex flex-col gap-3">
                    {NAVIGATION_LINKS.map((link, idx) => (
                      <motion.a
                        key={link.name}
                        id={`mobile-nav-link-${idx}`}
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className="font-display text-xl font-semibold text-brand-dark hover:text-brand-purple transition-colors"
                      >
                        {link.name}
                      </motion.a>
                    ))}
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-md">
                  <p className="font-sans text-sm font-medium text-brand-dark mb-1">
                    Join the thinkers & doers.
                  </p>
                  <p className="font-sans text-xs text-gray-600 leading-relaxed mb-2">
                    We are a team of strategists, designers, communicators, researchers.
                  </p>
                  <div className="flex gap-2 text-xs font-medium text-brand-purple">
                    <span>Alav</span>
                    <span>•</span>
                    <span>Ranimin</span>
                    <span>•</span>
                    <span>Cynthia</span>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-100 pt-4 mt-4">
                <a
                  href="mailto:info@elementum.com"
                  className="font-sans text-sm font-medium text-brand-dark hover:text-brand-purple transition-colors inline-flex items-center gap-1"
                >
                  info@elementum.com
                  <span>→</span>
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}