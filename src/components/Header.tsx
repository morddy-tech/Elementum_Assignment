import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import { NAVIGATION_LINKS } from "../data";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

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
              {/* Animated underline */}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-purple transition-all duration-300 group-hover:w-full" />
            </motion.a>
          ))}
        </nav>

        {/* Desktop Hamburger / Action Details */}
        <div className="hidden md:flex items-center">
          <motion.button
            id="nav-menu-btn-desktop"
            initial={{ opacity: 0, x: 15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="p-2 text-brand-dark hover:text-brand-purple hover:bg-gray-50 rounded-full transition-all flex flex-col justify-center items-end gap-1.5 w-10 h-10 group"
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
            {isOpen ? <X className="w-6 h-6 animate-scale-in" /> : <Menu className="w-6 h-6 animate-scale-in" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay & Content */}
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

            {/* Slide-out Drawer */}
            <motion.div
              id="mobile-drawer-content"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 w-4/5 max-w-sm bg-white shadow-2xl z-40 p-8 flex flex-col justify-between md:hidden"
            >
              <div className="mt-16 flex flex-col gap-6">
                <span className="font-heading text-xs uppercase tracking-widest text-brand-purple font-bold">
                  Navigation
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
                      className="font-display text-2xl font-bold text-brand-dark hover:text-brand-purple transition-colors"
                    >
                      {link.name}
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Decorative Drawer Footer */}
              <div className="border-t border-gray-100 pt-6 flex flex-col gap-3">
                <p className="font-sans text-xs text-gray-500">
                  Join the thinkers & doers.
                </p>
                <a
                  href="mailto:info@elementum.com"
                  className="font-sans text-sm font-semibold text-brand-dark hover:text-brand-purple transition-colors"
                >
                  info@elementum.com
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
