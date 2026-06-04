import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Send, CheckCircle2, Mail, ExternalLink, Globe } from "lucide-react";

export default function Subscription() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [showInput, setShowInput] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setEmail("");
    }, 1200);
  };

  return (
    <section id="contact" className="bg-brand-mint text-brand-dark pt-24 pb-12 overflow-hidden relative">
      
      {/* Handdrawn red arrows at the top pointing downwards */}
      <div className="absolute top-[3%] left-[15%] md:left-[35%] w-[120px] h-[70px] pointer-events-none select-none opacity-80 z-10 hidden sm:block">
        <svg
          viewBox="0 0 120 70"
          className="w-full h-full fill-none stroke-current text-brand-coral"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Handdrawn curve 1 */}
          <path
            d="M 20 10 Q 55 -5, 50 45"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <path
            d="M 43 35 L 50 45 L 58 37"
            strokeWidth="2.5"
            strokeLinecap="round"
          />

          {/* Handdrawn curve 2 */}
          <path
            d="M 70 15 Q 100 0, 95 50"
            strokeWidth="2.2"
            strokeLinecap="round"
            className="opacity-75"
          />
          <path
            d="M 88 40 L 95 50 L 102 42"
            strokeWidth="2.2"
            strokeLinecap="round"
            className="opacity-75"
          />
        </svg>
      </div>

      {/* Floating Semicircle Purple on the right edge */}
      <motion.div
        animate={{ scale: [1, 1.05, 1], rotate: [0, -3, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[-40px] md:right-[-2%] bottom-[45%] md:bottom-[40%] w-32 h-64 md:w-44 md:h-88 bg-brand-purple rounded-l-full opacity-90 select-none pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Newsletter Promo Card */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto pb-24">
          <motion.h2
            id="subscription-title"
            className="font-heading text-5xl md:text-6.5xl lg:text-[5.4rem] font-bold text-brand-dark leading-[1.05] tracking-tight mb-6"
          >
            Subscribe to <br />
            our newsletter
          </motion.h2>

          <p className="font-sans text-[15px] md:text-lg text-gray-600 font-medium tracking-wide mb-10 max-w-lg">
            To make your stay special and even more memorable
          </p>

          <AnimatePresence mode="wait">
            {!showInput ? (
              <motion.button
                key="btn-subscribe"
                id="show-sub-box-btn"
                onClick={() => setShowInput(true)}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
                className="bg-brand-dark text-white font-sans font-bold py-4.5 px-10 rounded-full shadow-lg hover:bg-neutral-850 hover:shadow-xl transition-all tracking-wide cursor-pointer text-sm md:text-base"
              >
                Subscribe Now
              </motion.button>
            ) : isSuccess ? (
              <motion.div
                key="success-card"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center gap-3 bg-white/70 backdrop-blur-md py-5 px-8 rounded-2xl border border-white max-w-md w-full animate-scale-in"
              >
                <CheckCircle2 className="w-8 h-8 text-emerald-600 animate-pulse" />
                <div>
                  <h4 className="font-heading text-sm font-bold text-brand-dark">
                    Welcome to the Circle!
                  </h4>
                  <p className="font-sans text-xs text-gray-500 mt-1">
                    Get ready for strategic insights & creative showcases.
                  </p>
                </div>
              </motion.div>
            ) : (
              <motion.form
                key="subscription-form"
                onSubmit={handleSubmit}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                className="flex flex-col sm:flex-row items-center gap-3 bg-white p-2 rounded-2xl sm:rounded-full shadow-xl max-w-lg w-full border border-brand-mint-dark/50"
              >
                <div className="flex items-center gap-2.5 px-4 w-full flex-grow">
                  <Mail className="w-5 h-5 text-gray-400 shrink-0" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address..."
                    className="w-full bg-transparent border-none py-3 focus:outline-none focus:ring-0 text-brand-dark font-sans placeholder-gray-400 font-medium text-sm md:text-base outline-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto bg-brand-purple text-white font-sans font-bold py-3.5 px-6 rounded-xl sm:rounded-full hover:bg-opacity-95 transition-all text-sm uppercase tracking-wider flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      Join Us <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>

        {/* Footer Top Sitemap Divider */}
        <div className="border-t border-brand-dark/10 pt-20 pb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-10 md:gap-8 justify-between">
            {/* Sitemap Column 1: Company */}
            <div className="lg:col-span-3 flex flex-col gap-6">
              <h4 className="font-heading text-xs uppercase tracking-widest text-[#5C8D7B] font-extrabold select-none">
                Company
              </h4>
              <div className="flex flex-col gap-3 font-sans text-sm font-semibold text-gray-700">
                <a href="#home" className="hover:text-brand-purple transition-all hover:translate-x-1 duration-155">Home</a>
                <a href="#studio" className="hover:text-brand-purple transition-all hover:translate-x-1 duration-155">Studio</a>
                <a href="#services" className="hover:text-brand-purple transition-all hover:translate-x-1 duration-155">Service</a>
                <a href="#testimonials" className="hover:text-brand-purple transition-all hover:translate-x-1 duration-155">Blog</a>
              </div>
            </div>

            {/* Sitemap Column 2: Terms & Policies */}
            <div className="lg:col-span-3 flex flex-col gap-6">
              <h4 className="font-heading text-xs uppercase tracking-widest text-[#5C8D7B] font-extrabold select-none">
                Terms & Policies
              </h4>
              <div className="flex flex-col gap-3 font-sans text-sm font-semibold text-gray-700">
                <a href="#privacy" className="hover:text-brand-purple transition-all hover:translate-x-1 duration-155">Privacy Policy</a>
                <a href="#terms" className="hover:text-brand-purple transition-all hover:translate-x-1 duration-155">Terms & Conditions</a>
                <a href="#explore" className="hover:text-brand-purple transition-all hover:translate-x-1 duration-155">Explore</a>
                <a href="#accessibility" className="hover:text-brand-purple transition-all hover:translate-x-1 duration-155">Accessibility</a>
              </div>
            </div>

            {/* Sitemap Column 3: Follow Us */}
            <div className="lg:col-span-3 flex flex-col gap-6">
              <h4 className="font-heading text-xs uppercase tracking-widest text-[#5C8D7B] font-extrabold select-none">
                Follow Us
              </h4>
              <div className="flex flex-col gap-3 font-sans text-sm font-semibold text-gray-700">
                <a href="https://instagram.com" target="_blank" rel="noreferrer" referrerPolicy="no-referrer" className="flex items-center gap-1.5 hover:text-brand-purple transition-all hover:translate-x-1 duration-155">
                  Instagram <ExternalLink className="w-3 h-3 opacity-55" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" referrerPolicy="no-referrer" className="flex items-center gap-1.5 hover:text-brand-purple transition-all hover:translate-x-1 duration-155">
                  LinkedIn <ExternalLink className="w-3 h-3 opacity-55" />
                </a>
                <a href="https://youtube.com" target="_blank" rel="noreferrer" referrerPolicy="no-referrer" className="flex items-center gap-1.5 hover:text-brand-purple transition-all hover:translate-x-1 duration-155">
                  Youtube <ExternalLink className="w-3 h-3 opacity-55" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noreferrer" referrerPolicy="no-referrer" className="flex items-center gap-1.5 hover:text-brand-purple transition-all hover:translate-x-1 duration-155">
                  Twitter <ExternalLink className="w-3 h-3 opacity-55" />
                </a>
              </div>
            </div>

            {/* Sitemap Column 4: Contact/Newsletter info info */}
            <div className="lg:col-span-3 flex flex-col gap-6">
              <h4 className="font-heading text-xs uppercase tracking-widest text-[#5C8D7B] font-extrabold select-none">
                Terms & Policies
              </h4>
              <div className="flex flex-col gap-4 font-sans text-sm text-gray-700 leading-relaxed font-medium">
                <p className="text-gray-600">
                  1498w Fluton ste, STE 2D <br />
                  Chicago, IL 63867.
                </p>
                <p className="font-mono text-xs text-brand-dark">
                  (123) 4567-8900
                </p>
                <a href="mailto:info@elementum.com" className="hover:text-brand-purple hover:underline transition-all break-all self-start pt-1 font-semibold">
                  info@elementum.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Rights Label */}
        <div className="border-t border-brand-dark/5 pt-8 mt-4 flex flex-col sm:flex-row items-center justify-between gap-4 font-sans text-xxs md:text-xs text-[#5C8D7B] font-medium font-semibold">
          <p>© 2026 Elementum. All rights reserved.</p>
          <div className="flex items-center gap-1">
            <Globe className="w-3.5 h-3.5 opacity-65" />
            <span>HQ Widescreen Standard Layout</span>
          </div>
        </div>

      </div>
    </section>
  );
}
