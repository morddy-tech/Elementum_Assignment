import { motion, useReducedMotion } from "motion/react";
import { TEAM_MEMBERS } from "../data";
import { useState, useEffect, useCallback, memo } from "react";

// Types
interface TeamMember {
  id: string | number;
  name: string;
  role: string;
  image: string;
  sizeClass: string;
  positionClass: string;
  animationDelay: number;
}

// Memoized Team Member Avatar Component
const TeamMemberAvatar = memo(({ 
  member, 
  index 
}: { 
  member: TeamMember; 
  index: number;
}) => {
  const [imageError, setImageError] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.8, y: 40 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={prefersReducedMotion ? { duration: 0 } : {
        duration: 0.8,
        delay: member.animationDelay,
        type: "spring",
        stiffness: 100,
        damping: 15,
      }}
      whileHover={prefersReducedMotion ? {} : {
        scale: 1.1,
        y: -10,
        zIndex: 40,
        transition: { duration: 0.2 },
      }}
      className={`absolute ${member.sizeClass} ${member.positionClass} transition-shadow duration-300 pointer-events-auto rounded-full group cursor-pointer`}
      role="listitem"
      aria-label={`Team member: ${member.name}, ${member.role}`}
    >
      <div className="w-full h-full rounded-full overflow-hidden border-[4px] border-white shadow-xl ring-4 ring-transparent group-hover:ring-brand-purple/40 group-hover:shadow-2xl transition-all duration-300">
        {imageError ? (
          <div className="w-full h-full bg-gradient-to-br from-brand-purple to-brand-pink flex items-center justify-center text-white text-2xl font-bold">
            {member.name.charAt(0)}
          </div>
        ) : (
          <img
            src={member.image}
            alt={`${member.name} - ${member.role}`}
            className="w-full h-full object-cover"
            loading="lazy"
            onError={() => setImageError(true)}
            referrerPolicy="no-referrer"
          />
        )}
      </div>

      {/* Tooltip */}
      <div 
        className="absolute top-[-40px] left-1/2 -translate-x-1/2 bg-brand-dark/95 backdrop-blur-sm text-white py-1.5 px-3 rounded-md text-[10px] md:text-xs font-sans tracking-wide shadow-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none duration-200 whitespace-nowrap z-50"
        aria-hidden="true"
      >
        <p className="font-bold text-xs">{member.name}</p>
        <p className="font-mono text-[9px] text-brand-mint">{member.role}</p>
      </div>
    </motion.div>
  );
});

TeamMemberAvatar.displayName = 'TeamMemberAvatar';

// Floating Cursor Component
const FloatingCursor = memo(() => {
  const prefersReducedMotion = useReducedMotion();
  
  if (prefersReducedMotion) return null;
  
  return (
    <motion.div
      animate={{
        x: [0, 40, -20, 0],
        y: [0, -20, 15, 0],
      }}
      transition={{
        duration: 12,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="absolute z-20 left-[25%] top-[56%] lg:left-[45%] lg:top-[54%] pointer-events-none"
      aria-hidden="true"
    >
      <div className="relative flex items-center">
        <svg
          className="w-5 h-5 text-brand-coral drop-shadow-md transform -rotate-45"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M4 4l16 7-9 2-7 11z" />
        </svg>
        <div className="bg-brand-coral text-white text-[10px] font-mono px-2 py-0.5 rounded-full rounded-tl-none font-bold shadow-md -ml-1 border border-white/20">
          C
        </div>
      </div>
    </motion.div>
  );
});

FloatingCursor.displayName = 'FloatingCursor';

// Active User Pill Component
const ActiveUserPill = memo(() => {
  const prefersReducedMotion = useReducedMotion();
  
  return (
    <motion.div
      initial={prefersReducedMotion ? false : { opacity: 0, y: -20, rotate: -5 }}
      animate={{ opacity: 1, y: 0, rotate: 2 }}
      transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.8, type: "spring", delay: 0.2 }}
      className="absolute right-6 top-[-10px] md:right-[15%] md:top-2 hover:scale-105 duration-200 z-30"
    >
      <div className="flex items-center gap-1.5 bg-[#1E1E1E] text-white text-[11px] md:text-xs font-mono py-1 px-2.5 rounded-full shadow-lg border border-white/10 pointer-events-auto">
        <span className="w-4 h-4 rounded-full bg-[#0ACF83] text-white flex items-center justify-center text-[9px] font-bold" aria-label="Figma">
          P
        </span>
        <span role="img" aria-label="Parrot">🦜</span>
        <span className="opacity-40" aria-hidden="true">|</span>
        <span className="font-bold">3 active</span>
        <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" aria-label="Active status" />
      </div>
    </motion.div>
  );
});

ActiveUserPill.displayName = 'ActiveUserPill';

// Background Decorators Component
const BackgroundDecorators = memo(() => (
  <>
    {/* Squiggle lines */}
    <div 
      className="absolute left-0 top-[20%] w-[120px] md:w-[180px] h-[300px] pointer-events-none opacity-40 md:opacity-85 select-none hidden sm:block"
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 100 200"
        className="w-full h-full fill-none stroke-current"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M-20,20 Q40,60 10,100 T50,180 T-10,240"
          stroke="#FF665A"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        <path
          d="M-30,40 Q30,80 0,120 T30,190 T-30,260"
          stroke="#121212"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    </div>

    {/* Purple semicircle */}
    <motion.div
      animate={useReducedMotion() ? {} : { y: [0, -15, 0], rotate: [0, 4, 0] }}
      transition={useReducedMotion() ? { duration: 0 } : { duration: 6, repeat: Infinity, ease: "easeInOut" }}
      className="absolute right-[-30px] md:right-[5%] top-[15%] lg:top-[25%] w-32 h-64 md:w-40 md:h-80 bg-brand-purple rounded-l-full opacity-90 select-none pointer-events-none"
      aria-hidden="true"
    />
  </>
));

BackgroundDecorators.displayName = 'BackgroundDecorators';

// Mobile Team Gallery Component
const MobileTeamGallery = memo(({ members }: { members: TeamMember[] }) => (
  <div className="block sm:hidden overflow-x-auto overflow-y-visible pb-6 pt-2 px-6 custom-scrollbar scroll-smooth">
    <div className="inline-flex gap-4">
      {members.map((member) => (
        <div
          key={member.id}
          className="flex flex-col items-center flex-shrink-0 group cursor-pointer"
          role="listitem"
        >
          <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-white ring-4 ring-brand-mint/30 shadow-lg transition-transform duration-300 group-hover:scale-105">
            <img
              src={member.image}
              alt={`${member.name} - ${member.role}`}
              className="w-full h-full object-cover"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
          </div>
          <span className="mt-2 text-xs font-semibold text-brand-dark">
            {member.name}
          </span>
          <span className="text-[10px] text-gray-400 font-mono">
            {member.role}
          </span>
        </div>
      ))}
    </div>
  </div>
));

MobileTeamGallery.displayName = 'MobileTeamGallery';

// Desktop Team Gallery Component
const DesktopTeamGallery = memo(({ members }: { members: TeamMember[] }) => (
  <div className="hidden sm:block absolute inset-0 w-full h-full">
    {members.map((member, idx) => (
      <TeamMemberAvatar key={member.id} member={member} index={idx} />
    ))}
  </div>
));

DesktopTeamGallery.displayName = 'DesktopTeamGallery';

// Main Hero Component
export default function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    // SSR fallback
    return (
      <section
        id="home"
        className="relative min-h-[90vh] lg:min-h-screen bg-white pt-10 pb-48 overflow-hidden flex flex-col justify-between"
      >
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full flex-grow flex flex-col justify-center items-center text-center">
          <div className="max-w-4xl mx-auto mt-6">
            <h1 className="font-heading text-[10vw] sm:text-[6vw] md:text-[5.5vw] lg:text-[4.6vw] font-bold text-brand-dark leading-[1.1] tracking-tight">
              Loading...
            </h1>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="home"
      className="relative min-h-[90vh] lg:min-h-screen bg-white pt-10 pb-48 overflow-hidden flex flex-col justify-between"
      aria-label="Hero section"
    >
      {/* Background Decorators */}
      <BackgroundDecorators />

      {/* Floating Elements */}
      <ActiveUserPill />
      <FloatingCursor />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full flex-grow flex flex-col justify-center items-center text-center">
        {/* Heading Layout */}
        <div className="max-w-4xl mx-auto mt-6">
          <h1 className="font-heading text-[10vw] sm:text-[6vw] md:text-[5.5vw] lg:text-[4.6vw] font-bold text-brand-dark leading-[1.1] tracking-tight">
            {/* The thinkers */}
            <span className="inline-block mr-2 relative z-10">
              The{" "}
              <span className="relative inline-block px-1">
                thinkers
                {/* Handdrawn SVG underline */}
                <svg
                  className="absolute left-0 bottom-[-8px] w-full h-3 text-brand-yellow z-[-1]"
                  viewBox="0 0 100 10"
                  preserveAspectRatio="none"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M3 5 Q35 9 60 4 T97 5"
                    stroke="currentColor"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </span>{" "}
            {/* and doers were */}
            <span className="inline-block mr-2">and doers were</span>{" "}
            {/* changing */}
            <span className="relative inline-block mx-1">
              <span className="absolute inset-x-[-15px] inset-y-[-5px] bg-brand-pink rounded-full -skew-y-1 transform scale-x-110 opacity-80 z-0 border border-brand-pink/40" />
              <span className="relative z-10 font-extrabold italic pr-1 pl-1">
                changing
              </span>
            </span>{" "}
            {/* the status */}
            <span className="inline-block mt-3 md:mt-0">
              the{" "}
              <span className="relative inline-block mx-1">
                <span className="absolute inset-x-[-14px] inset-y-[-4px] bg-brand-mint rounded-full transform opacity-90 z-0 border border-brand-mint-dark/50" />
                <span className="relative z-10 text-brand-dark font-medium font-display px-1">
                  status
                </span>
              </span>
            </span>{" "}
            {/* Quo with */}
            <span className="inline-block font-display tracking-wide font-normal">
              Quo with
            </span>
          </h1>
        </div>

        {/* Subtitle Text */}
        <motion.p
          initial={prefersReducedMotion ? false : { opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.8, delay: 0.4 }}
          className="mt-10 max-w-2xl text-center text-[15px] md:text-[17px] text-gray-500 leading-relaxed font-sans"
        >
          We are a team of strategists, designers, communicators, researchers.
          Together, we believe that progress only happens when you refuse to
          play things safe.
        </motion.p>
      </div>

      {/* Team Gallery */}
      <div className="relative w-full bottom-[-10px] left-0 right-0 max-w-7xl mx-auto h-[260px] md:h-[300px] lg:h-[380px] mt-16 px-6">
        <MobileTeamGallery members={TEAM_MEMBERS} />
        <DesktopTeamGallery members={TEAM_MEMBERS} />
      </div>
    </section>
  );
}