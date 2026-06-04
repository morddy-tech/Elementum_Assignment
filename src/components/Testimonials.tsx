import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Quote, User, Building } from "lucide-react";
import { TESTIMONIALS } from "../data";

export default function Testimonials() {
  const [activeIdx, setActiveIdx] = useState(0);

  const activeTestimonial = TESTIMONIALS[activeIdx];

  return (
    <section id="testimonials" className="relative py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <h2
            id="testimonials-title"
            className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-brand-dark leading-tight tracking-tight"
          >
            <span className="relative inline-block mx-1 pl-1 pr-1 mr-2">
              <span className="absolute inset-x-[-12px] inset-y-[-2px] bg-brand-mint rounded-full opacity-65 z-[-1] border border-brand-mint-dark/40" />
              <span className="relative z-10 font-medium px-0.5">What</span>
            </span>{" "}
            our customer says{" "}
            <span className="relative inline-block px-1">
              About Us
              {/* Yellow squiggle underline SVG */}
              <svg
                className="absolute left-0 bottom-[2px] w-full h-2.5 text-brand-yellow z-[-1]"
                viewBox="0 0 100 10"
                preserveAspectRatio="none"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 5 Q35 9 65 4 T97 5"
                  stroke="currentColor"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h2>
          <p className="mt-4 text-xs font-mono text-gray-400 uppercase tracking-widest">
            Hover or Click on faces to swap stories
          </p>
        </div>

        {/* Orbit Testimonial Workspace Layout (Responsive Grid or Custom Relative Circles block) */}
        <div className="relative min-h-[550px] md:min-h-[500px] flex items-center justify-center">
          
          {/* Floating Orbiters (Shown as a flexible absolute container on md+ screens, simpler flex/grid layout on smaller screens) */}
          <div className="hidden md:block absolute inset-0 pointer-events-none">
            {TESTIMONIALS.map((testimonial, idx) => {
              const isActive = idx === activeIdx;

              return (
                <motion.button
                  key={testimonial.id}
                  onClick={() => setActiveIdx(idx)}
                  onMouseEnter={() => setActiveIdx(idx)}
                  whileHover={{ scale: 1.15 }}
                  animate={{
                    scale: isActive ? 1.08 : 1.0,
                    boxShadow: isActive
                      ? "0 20px 25px -5px rgb(146 79 232 / 0.15), 0 8px 10px -6px rgb(146 79 232 / 0.15)"
                      : "0 4px 6px -1px rgb(0 0 0 / 0.05), 0 2px 4px -2px rgb(0 0 0 / 0.05)",
                  }}
                  className={`absolute ${testimonial.positionClass} rounded-full z-10 pointer-events-auto cursor-pointer focus:outline-none focus:ring-2 focus:ring-brand-purple/50 border-4 ${
                    isActive ? "border-brand-purple ring-4 ring-brand-purple/20" : "border-white"
                  } overflow-hidden transition-all duration-300`}
                >
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </motion.button>
              );
            })}
          </div>

          {/* Fallback Mobile Slider Carousel List for small screens */}
          <div className="md:hidden flex gap-3 px-4 py-3 overflow-x-auto custom-scrollbar w-full justify-start items-center absolute top-2 pb-6">
            {TESTIMONIALS.map((testimonial, idx) => {
              const isActive = idx === activeIdx;

              return (
                <button
                  key={testimonial.id}
                  onClick={() => setActiveIdx(idx)}
                  className={`flex-shrink-0 w-12 h-12 rounded-full overflow-hidden border-2 shadow-sm ${
                    isActive ? "border-brand-purple ring-2 ring-brand-purple/35 scale-105" : "border-white"
                  } transition-all duration-300`}
                >
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </button>
              );
            })}
          </div>

          {/* Testimonial Active Display Card Dashboard */}
          <div className="w-full max-w-2xl px-4 mt-20 md:mt-0 relative z-20">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIdx}
                initial={{ opacity: 0, y: 15, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -15, scale: 0.98 }}
                transition={{ duration: 0.35 }}
                className="bg-brand-mint-light/90 border border-brand-mint-dark/40 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl flex flex-col justify-between relative"
              >
                {/* Floating Quotes Graphics */}
                <span className="absolute left-4 top-4 text-cyan-800/10 select-none font-serif text-[8rem] leading-none pointer-events-none">
                  “
                </span>
                <span className="absolute right-4 bottom-4 text-cyan-800/10 select-none font-serif text-[8rem] leading-none pointer-events-none">
                  ”
                </span>

                {/* Quote Content text */}
                <div className="relative z-10 flex flex-col gap-6">
                  <div className="flex items-center gap-2">
                    <Quote className="w-5 h-5 text-brand-purple/80 shrink-0" />
                    <span className="font-mono text-xxs tracking-widest uppercase text-brand-purple/80 font-bold">
                      Customer Success Journey
                    </span>
                  </div>

                  <p className="font-sans text-base md:text-[18px] text-gray-700 font-medium leading-relaxed italic pr-2 pl-1 select-none">
                    "{activeTestimonial.quote}"
                  </p>
                </div>

                {/* Subtext info panel: Author & Title */}
                <div className="mt-8 pt-6 border-t border-brand-mint-dark/40 relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full overflow-hidden border border-brand-purple/35 shrink-0 bg-brand-purple/5 flex items-center justify-center">
                      {activeTestimonial.image ? (
                        <img
                          src={activeTestimonial.image}
                          alt={activeTestimonial.author}
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                      ) : (
                        <User className="w-5 h-5 text-brand-purple" />
                      )}
                    </div>
                    <div>
                      <h4 className="font-heading text-sm font-bold text-brand-dark">
                        {activeTestimonial.author}
                      </h4>
                      <p className="font-sans text-xs text-gray-500 font-medium">
                        {activeTestimonial.role}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 bg-white py-1 px-3 rounded-full border border-brand-mint-dark/50 self-start sm:self-auto shadow-xs">
                    <Building className="w-3.5 h-3.5 text-brand-purple" />
                    <span className="font-mono text-[10px] text-brand-dark font-extrabold tracking-wide uppercase">
                      {activeTestimonial.company}
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
