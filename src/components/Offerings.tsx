import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Sparkles, Check, Globe, HelpCircle } from "lucide-react";
import { SERVICE_OFFERINGS } from "../data";

// Detailed mock information to show when accordions expand, making it fully functional!
const OFFERING_DETAILS = [
  {
    id: "offering-1",
    subtitle: "Strategic design-led consulting & embedded workshops.",
    desc: "We co-create brand strategy and digital roadmaps side by side with your internal departments. We don't just dump slide decks — we embed as collaborative multipliers to test ideas in real time.",
    bulletPoints: [
      "Custom cross-functional workshops",
      "Executive alignment sessions",
      "Shared strategic playbooks",
    ],
    highlightStat: "120+ client sessions led",
  },
  {
    id: "offering-2",
    subtitle: "Uncompromising positioning audits and research.",
    desc: "We look closely at current industry overhead, design gaps, and operational structures. We have honest conversations about where your product is heavy, slow, or misaligned, and streamline it for performance.",
    bulletPoints: [
      "Frictionless system architecture audits",
      "Market positioning contrast mapping",
      "User flows weight reduction",
    ],
    highlightStat: "40% reduction in workflow weight",
  },
  {
    id: "offering-3",
    subtitle: "Digital experiences that instil profound market trust.",
    desc: "Deploying high-speed production frameworks integrated with state-of-the-art interactive aesthetics. We pilot confidence through solid prototypes, secure codebases, and eye-safe UI elements.",
    bulletPoints: [
      "Secure corporate digital products",
      "Rich web applications (React / Tailwind v4)",
      "Interactive research sandboxes",
    ],
    highlightStat: "100% cloud adoption rates",
  },
];

export default function Offerings() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="services" className="relative py-28 bg-[#FCFCFD] overflow-hidden border-t border-b border-gray-100">
      
      {/* Red/Coral drawing line background accent */}
      <div className="absolute right-[5%] top-10 w-[200px] h-[100px] pointer-events-none select-none opacity-60 hidden md:block">
        <svg
          viewBox="0 0 100 50"
          className="w-full h-full fill-none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5 45 C40 -15, 60 70, 95 10"
            stroke="#FF665A"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Title Header */}
        <div className="flex flex-col items-start text-left mb-16 md:mb-24">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-brand-purple font-bold mb-3 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" /> Capabilities
          </span>
          <h2
            id="offerings-title"
            className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-brand-dark leading-tight tracking-tight"
          >
            What we{" "}
            <span className="relative inline-block mx-1">
              <span className="absolute inset-x-[-12px] inset-y-[-2px] bg-brand-mint rounded-full opacity-65 z-[-1] border border-brand-mint-dark/40" />
              <span className="relative z-10 font-medium px-0.5">can</span>
            </span>{" "}
            <span className="relative inline-block px-1">
              offer
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
            </span>{" "}
            you!
          </h2>
        </div>

        {/* Tabular/Accordion List */}
        <div className="flex flex-col border-t border-gray-200">
          {SERVICE_OFFERINGS.map((offering, idx) => {
            const extraDetails = OFFERING_DETAILS.find((d) => d.id === offering.id);
            const isExpanded = expandedId === offering.id;

            return (
              <div
                key={offering.id}
                id={`offering-row-${idx}`}
                className="flex flex-col border-b border-gray-200"
              >
                {/* Accordion Trigger Header */}
                <button
                  onClick={() => toggleExpand(offering.id)}
                  className="w-full text-left py-10 md:py-12 px-2 grid grid-cols-1 md:grid-cols-12 gap-6 items-center focus:outline-none focus:ring-1 focus:ring-brand-purple/20 group hover:bg-gray-50/50 transition-colors cursor-pointer"
                >
                  {/* Category/Office Label */}
                  <span className="md:col-span-3 text-xs md:text-sm font-sans text-gray-500 font-medium md:max-w-[210px] pr-4 leading-relaxed group-hover:text-brand-purple transition-colors">
                    {offering.category}
                  </span>

                  {/* Primary Heading with Interactive Badge overlapping if specified */}
                  <div className="md:col-span-8 flex flex-wrap items-center gap-4 relative">
                    <span className="font-heading text-xl sm:text-2xl md:text-3.5xl lg:text-[2.2rem] font-bold text-brand-dark group-hover:text-brand-purple transition-transform duration-300 group-hover:translate-x-1.5 leading-tight">
                      {offering.title}
                    </span>

                    {/* Highly-styled sticker collage graphic for ROW 3 */}
                    {offering.hasCollageBadge && (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                        className="relative w-12 h-12 md:w-16 md:h-16 flex-shrink-0 flex items-center justify-center rounded-full bg-yellow-400 p-0.5 border border-white shadow-md animate-scale-in ml-1 md:ml-4 overflow-hidden"
                      >
                        {/* Circular collage texture styling helper */}
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-yellow-300 via-red-300 to-indigo-400 opacity-80" />
                        <div className="relative text-[7px] md:text-[9px] font-mono leading-none tracking-tight text-center font-extrabold text-black uppercase z-10 flex flex-col items-center">
                          <span className="bg-white px-1 py-0.5 rounded-sm shadow-xs mb-0.5 text-brand-coral border-[0.5px]">
                            LOGO
                          </span>
                          <span className="tracking-widest">ME</span>
                        </div>
                        {/* Interactive green stamp dot overlay */}
                        <div className="absolute bottom-1 right-2 w-3.5 h-3.5 bg-green-500 rounded-full border border-white flex items-center justify-center text-[5px] text-white font-bold select-none">
                          ✓
                        </div>
                      </motion.div>
                    )}
                  </div>

                  {/* Arrow Indicator Column */}
                  <div className="md:col-span-1 flex justify-end">
                    <motion.div
                      animate={{
                        rotate: isExpanded ? 90 : 0,
                        color: isExpanded ? "#924FE8" : "#121212",
                      }}
                      transition={{ duration: 0.3 }}
                      className="p-3.5 rounded-full border border-gray-200 bg-white group-hover:bg-brand-purple group-hover:border-brand-purple group-hover:text-white transition-all shadow-sm"
                    >
                      <ArrowRight className="w-5 h-5" />
                    </motion.div>
                  </div>
                </button>

                {/* Collapsible Accordion Panel Detail Content */}
                <AnimatePresence>
                  {isExpanded && extraDetails && (
                    <motion.div
                      id={`offering-panel-${idx}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="pb-12 pt-4 px-4 md:pl-[25%] pr-4 md:pr-12 grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-gray-100 bg-gray-50/30">
                        {/* Subtitle & Desc */}
                        <div className="flex flex-col">
                          <p className="font-heading text-lg font-bold text-brand-purple mb-3">
                            {extraDetails.subtitle}
                          </p>
                          <p className="font-sans text-sm md:text-base text-gray-500 leading-relaxed">
                            {extraDetails.desc}
                          </p>
                        </div>

                        {/* Bullet achievements & Stat Callout */}
                        <div className="flex flex-col justify-between p-6 bg-white rounded-2xl border border-gray-100 shadow-sm gap-5">
                          <div className="flex flex-col gap-2.5">
                            <span className="font-mono text-[10px] text-gray-400 uppercase tracking-widest font-bold">
                              Key deliverables Included
                            </span>
                            {extraDetails.bulletPoints.map((bullet, idx) => (
                              <div key={idx} className="flex items-center gap-2.5 text-sm font-sans text-gray-700">
                                <span className="w-5 h-5 rounded-full bg-brand-mint-light/80 text-brand-mint-dark flex items-center justify-center p-0.5">
                                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                                </span>
                                <span>{bullet}</span>
                              </div>
                            ))}
                          </div>

                          <div className="border-t border-gray-100 pt-3 flex items-center justify-between">
                            <span className="text-xs text-gray-400 font-mono">
                              Benchmark
                            </span>
                            <span className="text-xs font-bold font-sans text-brand-dark bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-100">
                              {extraDetails.highlightStat}
                            </span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
