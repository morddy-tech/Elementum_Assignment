import { motion } from "motion/react";

export default function SplitContent() {
  return (
    <section id="studio" className="relative py-24 bg-white overflow-hidden">
      {/* Curved Connective Wave Line (flows from top section right-side down to bottom section left-side) */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0 hidden lg:block">
        <svg
          className="w-full h-full"
          viewBox="0 0 1440 1000"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Wave path from coordinates representing circle center to second circle center */}
          <path
            d="M 1000 240 Q 600 400, 680 600 T 300 780"
            stroke="#FF665A"
            strokeWidth="2"
            strokeDasharray="8 6"
            className="opacity-50"
          />
          <path
            d="M 1000 240 Q 600 400, 680 600 T 300 780"
            stroke="#FF665A"
            strokeWidth="3.5"
            strokeLinecap="round"
            className="opacity-15 blur-[2px]"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col gap-32 md:gap-40">
        
        {/* Section 2: Tomorrow should be better than today */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-6 flex flex-col items-start text-left max-w-xl">
            <h2
              id="tomorrow-title"
              className="font-heading text-4xl md:text-5xl lg:text-[3.2rem] font-bold text-brand-dark leading-[1.15] mb-6 tracking-tight"
            >
              <span className="relative inline-block px-1 mr-2">
                Tomorrow
                <svg
                  className="absolute left-0 bottom-[2px] w-full h-2.5 text-brand-yellow z-[-1]"
                  viewBox="0 0 100 10"
                  preserveAspectRatio="none"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 5 Q35 8 70 4 T97 5"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              should be better than{" "}
              <span className="relative inline-block mx-1">
                <span className="absolute inset-x-[-12px] inset-y-[-2px] bg-brand-mint rounded-full opacity-65 z-[-1] border border-brand-mint-dark/40" />
                <span className="relative z-10 font-medium px-0.5">today</span>
              </span>
            </h2>

            <p className="font-sans text-base text-gray-500 leading-relaxed mb-8">
              We are a team of strategists, designers, communicators, researchers.
              Together, we believe that progress only happens when you refuse to
              play things safe.
            </p>

            <motion.a
              id="tomorrow-cta"
              href="#services"
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="group inline-flex items-center gap-4 text-brand-dark font-sans font-bold text-sm tracking-widest uppercase hover:text-brand-purple transition-colors"
            >
              Read more
              <span className="flex items-center select-none font-mono tracking-tighter text-brand-coral group-hover:translate-x-1 duration-200">
                ─────────&gt;
              </span>
            </motion.a>
          </div>

          {/* Right Image Layout */}
          <div className="lg:col-span-6 flex justify-center items-center relative">
            {/* Blurry glow */}
            <div className="absolute w-72 h-72 bg-brand-pink-light/60 rounded-full blur-3xl -z-10" />

            {/* Coral Tilted Square behind circle */}
            <motion.div
              animate={{ rotate: [12, 16, 12], y: [0, -6, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="absolute pointer-events-none w-20 h-20 md:w-28 md:h-28 bg-[#FF665A] right-[8%] sm:right-[15%] top-[-10px] sm:top-[-20px] rounded-lg -z-10 shadow-lg origin-center"
            />

            {/* Main Circle Image Frame */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
              className="relative w-[320px] h-[320px] md:w-[420px] md:h-[420px] rounded-full overflow-hidden border-[6px] border-white shadow-2xl z-10 hover:shadow-brand-mint/20 hover:border-brand-mint transition-all duration-500"
            >
              <img
                src="https://images.unsplash.com/photo-1542744094-3a31f103e35f?auto=format&fit=crop&q=80&w=800"
                alt="Creative Collaboration Boardroom"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>

        {/* Section 3: See how we can help you progress */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Image Layout (Shows first on desktop/mobile now natively via order configuration) */}
          <div className="lg:col-span-6 flex justify-center items-center order-last lg:order-first relative">
            {/* Triangular decorative polygons floating around the image */}
            <motion.div
              animate={{ y: [0, -10, 0], rotate: [-24, -20, -24] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute pointer-events-none -left-[4px] bottom-[-20px] w-24 h-24 bg-brand-coral -z-10 shadow-md origin-center"
              style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
            />
            <motion.div
              animate={{ y: [0, 8, 0], rotate: [15, 20, 15] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute pointer-events-none right-[5%] top-[-10px] w-14 h-14 bg-brand-coral/50 -z-10 origin-center"
              style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
            />

            {/* Main Circle Image Frame 2 */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
              className="relative w-[320px] h-[320px] md:w-[420px] md:h-[420px] rounded-full overflow-hidden border-[6px] border-white shadow-2xl z-10 hover:shadow-brand-pink/20 hover:border-brand-pink transition-all duration-500"
            >
              <img
                src="https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?auto=format&fit=crop&q=80&w=800"
                alt="Creative strategists lunch working session"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>

          {/* Right Text Column */}
          <div className="lg:col-span-6 flex flex-col items-start text-left max-w-xl">
            <h2
              id="progress-title"
              className="font-heading text-4xl md:text-5xl lg:text-[3.2rem] font-bold text-brand-dark leading-[1.15] mb-6 tracking-tight"
            >
              <span className="relative inline-block mx-1 pl-1 pr-1 mr-2">
                <span className="absolute inset-x-[-12px] inset-y-[-2px] bg-brand-mint rounded-full opacity-65 z-[-1] border border-brand-mint-dark/40" />
                <span className="relative z-10 font-medium px-0.5">See</span>
              </span>
              how we can help you{" "}
              <span className="relative inline-block px-1">
                progress
                <svg
                  className="absolute left-0 bottom-[2px] w-full h-2.5 text-brand-yellow z-[-1]"
                  viewBox="0 0 100 10"
                  preserveAspectRatio="none"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 5 Q35 8 70 4 T97 5"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h2>

            <p className="font-sans text-base text-gray-500 leading-relaxed mb-8">
              We add a layer of fearless insights and action that allows change
              makers to accelerate their progress in areas such as brand,
              design, digital, comms and social research.
            </p>

            <motion.a
              id="progress-cta"
              href="#services"
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="group inline-flex items-center gap-4 text-brand-dark font-sans font-bold text-sm tracking-widest uppercase hover:text-brand-purple transition-colors"
            >
              Read more
              <span className="flex items-center select-none font-mono tracking-tighter text-brand-coral group-hover:translate-x-1 duration-200">
                ─────────&gt;
              </span>
            </motion.a>
          </div>
        </div>

      </div>
    </section>
  );
}
